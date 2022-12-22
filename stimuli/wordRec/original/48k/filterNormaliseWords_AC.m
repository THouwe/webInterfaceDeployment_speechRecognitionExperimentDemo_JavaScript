% see extractDigits.m

inDir = 'C:\Users\Houwelin2\Desktop\DSM\Words\REC\';
saveDir = 'C:\Users\Houwelin2\Desktop\DSM\Words\wordsFinal\';
saveDirLong = [saveDir 'Long\'];
% saveDirMid = [saveDir 'Mid\'];
% saveDirShort = [saveDir 'Short\'];

[fY] = butterBPFilterSimple(Y,fs,filtOrd,loFreq,hiFreq)



T = readtable([inDir 'digitBoundariesLONG.xlsx'],'ReadVariableNames',true);

RMS_fullDigit=NaN([nGoodSpeakers*nDigits 1]);

for s=1:nSpeakers
    clear X Y
    if ismember(s,goodSpeakers)
        rows=(s-1)*nDigits + 1 : s*nDigits;
        for d = 1:nDigits
            disp(['Extracting digit ' num2str(digitOrder(d)) ' from speaker ' num2str(s) '...'])
            [Y,fs] = audioread([saveDirLong 'Speaker' sprintf('%02.f',s) '_Digit' num2str(digitOrder(d)) '_Gain' num2str(T.InputGain(rows(d))) '_Long.wav']);
            X = Y(T.minSample(rows(d)):T.maxSample(rows(d)));
            %              X = fix(Y(T.minSample(rows(d)):T.maxSample(rows(d))));
            saveFileName =[saveDirSelected 'Speaker' sprintf('%02.f',s) '_Digit' num2str(digitOrder(d)) '_Minimal.wav'];
%             if s < 10
%                 saveFileName = [saveDirSelected 'Speaker0' num2str(s) '_Digit' num2str(digitOrder(d)) '_Minimal.wav'];
%             else
%                 saveFileName = [saveDirSelected 'Speaker' num2str(s) '_Digit' num2str(digitOrder(d)) '_Minimal.wav'];
%             end
            audiowrite(saveFileName,X,fs);
            RMS_fullDigit(rows(d))=rms(X);
        end
    end
end

%% prepare for RMS normalisation
RS = reshape(RMS_fullDigit, [nDigits nSpeakers]);

selectedRMS = NaN([nDigits nGoodSpeakers]);

for s = 1:nGoodSpeakers
    selectedRMS(:,s)=RS(:,goodSpeakers(s));
end

D=digitOrder';
ID2add=[1:5 7 9];

for i = 1:length(ID2add)
    D(ID2add(i)) = D(ID2add(i))+1;
end
[~,Dsort]=sort(D); 

RMS_RS = NaN([nDigits nGoodSpeakers]);
for col = 1:size(RMS_RS,2)
    clear B C
    C = selectedRMS(:,col);
    B = C(Dsort);
    RMS_RS(:,col) = B;
end

% RMS_RS(1,9)=RMS_cutted(1);
% RMS_RS(1,27)=RMS_cutted(2);
% RMS_RS(6,31)=RMS_cutted(3);
% RMS_RS(1,37)=RMS_cutted(4);
% RMS_RS(1,43)=RMS_cutted(5);
% RMS_RS(8,43)=RMS_cutted(6);
% RMS_RS(8,52)=RMS_cutted(7);

saveName = ['C:\Users\Houwelin2\Desktop\DegSpeechMot\WavFilesSingleDigits\S16\RMSbeforeEqual.mat'];
save(saveName, 'RMS_RS')


%% get a bit of descriptive stats
grandAvgRMS=mean(RMS_RS(:));    % 0.0583
grandStdRMS=std(RMS_RS(:));  % 0.0271
RMS_digits = mean(RMS_RS');
RMS_std_digits = std(RMS_RS');
RMS_speakers= mean(RMS_RS);
RMS_std_speakers= std(RMS_RS);

saveName2 = ['C:\Users\Houwelin2\Desktop\DegSpeechMot\WavFilesSingleDigits\S16\RMS_DescriptiveStats.mat'];
save(saveName2, 'grandAvgRMS', 'grandStdRMS', 'RMS_digits', 'RMS_std_digits', 'RMS_speakers', 'RMS_std_speakers')


%% equalize RMS

AudioFiles=dir('C:\Users\Houwelin2\Desktop\DegSpeechMot\WavFilesSingleDigits\S16\*.wav');
saveDirEq=[saveDirSelected 'RMSequalised\']; %where will they go once processed

devFreq=48000;

for s=1:length(goodSpeakers)
        for d = 1:nDigits
            clear Y
            
            if d < 8
                dig = d - 1;
            else
                dig = d;
            end
            
            ScaleFactor=grandAvgRMS/RMS_RS(d,s);%Ratio of mean to actual
            disp(['Normalising RMS of digit ' num2str(dig) ' from speaker ' num2str(goodSpeakers(s)) '...'])
            
            loadFileName =[saveDirSelected 'Speaker' sprintf('%02.f',goodSpeakers(s)) '_Digit' num2str(dig) '_Minimal.wav'];
            saveFileName = [saveDirEq 'Speaker' sprintf('%02.f',goodSpeakers(s)) '_Digit' num2str(dig) '_Equalized.wav'];
            
%             if s < 5
%                 loadFileName = [saveDirSelected 'Speaker0' num2str(goodSpeakers(s)) '_Digit' num2str(dig) '_Minimal.wav'];
%                 saveFileName = [saveDirEq 'Speaker0' num2str(goodSpeakers(s)) '_Digit' num2str(dig) '_Equalized.wav'];
%             else
%                 loadFileName = [saveDirSelected 'Speaker' num2str(goodSpeakers(s)) '_Digit' num2str(dig) '_Minimal.wav'];
%                 saveFileName = [saveDirEq 'Speaker' num2str(goodSpeakers(s)) '_Digit' num2str(dig) '_Equalized.wav'];
%             end
            
            [Y,fs] = audioread(loadFileName);
            
            adjustedSignal = Y*ScaleFactor; %scale the signal
            
            
            % resample
            wavedata = resample(adjustedSignal', devFreq, fs)';
            
            
            audiowrite(saveFileName,wavedata,devFreq);
        end

end

clear AudioFiles
AudioFiles=dir('C:\Users\Houwelin2\Desktop\DegSpeechMot\WavFilesSingleDigits\S16\RMSequalised\*.wav');
for AF=1:size(AudioFiles,1)

    FileName{AF}=AudioFiles(AF).name;
    [wave{AF},Fs(AF)]=audioread(fullfile(AudioFiles(AF).folder,AudioFiles(AF).name));
    wave{AF}=mean(wave{AF},2);
    RMS_eq(AF)=rms(wave{AF});

end

save('C:\Users\Houwelin2\Desktop\DegSpeechMot\WavFilesSingleDigits\S16\RMSequalised\equalisationCheck.mat','RMS_eq')

%% resample noise
% [N,fs] = audioread([noiseDir 'SSN.wav']);
% saveFileName=[noiseDir 'SSNdevFreq.wav'];
% devFreq=48000;
% wavedata = resample(N', devFreq, fs)';
% audiowrite(saveFileName,wavedata,devFreq);
