BWD = 'C:\Users\Houwelin2\Desktop\ACexp_NodeJs\stimuli\wordRec\counterbalanceWords\';
wordsDir = 'C:\Users\Houwelin2\Desktop\ACexp_NodeJs\stimuli\wordRec\original\16k\';
SiN0dBdir = 'C:\Users\Houwelin2\Desktop\ACexp_NodeJs\stimuli\wordRec\SiN\0dB\';
SiN2dBdir = 'C:\Users\Houwelin2\Desktop\ACexp_NodeJs\stimuli\wordRec\SiN\2dB\';
NVS4chanDir = 'C:\Users\Houwelin2\Desktop\ACexp_NodeJs\stimuli\wordRec\NVS\4chan\';
NVS5chanDir = 'C:\Users\Houwelin2\Desktop\ACexp_NodeJs\stimuli\wordRec\NVS\5chan\';

tbl_SiN = readtable([BWD 'matchedList1.txt']);
tbl_NVS = readtable([BWD 'matchedList2.txt']);

[N, fs] = psychwavread('C:\Users\Houwelin2\Desktop\ACexp_NodeJs\stimuli\wordRec\original\SSN_10speak_LTAS.wav');
rampTime = fs/100;
loFreq = 50;
hiFreq = 5000;
filtOrd = 6;

%% SiN
for i = 1:size(tbl_SiN,1)
    [y,fs] = psychwavread([wordsDir tbl_SiN.Var1{i} '.wav']);
    noise = N(1:length(y));
    
    y = butterBPFilterSimple(y,fs,filtOrd,loFreq,hiFreq);
    noise = butterBPFilterSimple(noise,fs,filtOrd,loFreq,hiFreq);
    
    SNR = 0;
    SiNStim0dB = SNmixWords_ACexp(y,noise,SNR,rampTime);
    psychwavwrite(SiNStim0dB, fs, [SiN0dBdir tbl_SiN.Var1{i} '.wav']);
    
    SNR = 2;
    SiNStim2dB = SNmixWords_ACexp(y,noise,SNR,rampTime);
    psychwavwrite(SiNStim2dB, fs, [SiN2dBdir tbl_SiN.Var1{i} '.wav']);
end

%% NVS
envSmoothNV=16;
envDepth=0.8;

for i = 1:size(tbl_SiN,1)
    [y,fs] = psychwavread([wordsDir tbl_NVS.Var1{i} '.wav']);
    
    NrNVChan = 5;
    NVSStim5chan = vocode_ACexp('noise', 'n', 'greenwood', 'hilbert', envSmoothNV, NrNVChan, envDepth, y, fs, loFreq, hiFreq, rms(y));
    psychwavwrite(NVSStim5chan, fs, [NVS5chanDir tbl_NVS.Var1{i} '.wav']);
    
    NrNVChan = 4;
    NVSStim4chan = vocode_ACexp('noise', 'n', 'greenwood', 'hilbert', envSmoothNV, NrNVChan, envDepth, y, fs, loFreq, hiFreq, rms(y));
    psychwavwrite(NVSStim5chan, fs, [NVS4chanDir tbl_NVS.Var1{i} '.wav']);
end


