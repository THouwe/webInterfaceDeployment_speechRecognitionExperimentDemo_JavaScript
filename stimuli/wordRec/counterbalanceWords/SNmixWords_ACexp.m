function SiNStim = SNmixWords_ACexp(S,N,SNR,rampTime)
%TH, 2019-12-11

% SNarray = cell([length(SNR) 2]);

%% rms signal
if size(S,2) == 2
    S = mean(S,2);
elseif size(S,2) > 2
    msg = 'Error! S cannot have more than 2 columns (stereo recording)';
    error(msg)
end
RMS_Sin = rms(S); 

%% rms noise
RMS_n = NaN([1 size(N,2)]);
for i=1:size(N,2)
    RMS_n(i) = rms(N(:,i)');
end
RMS_N = mean(RMS_n);

% normalise
for i=1:size(N,2)
    ScaleFactorN=RMS_N/RMS_n(i);
    N(:,i) = N(:,i).*ScaleFactorN; %scale the signal
end

%% prepare smoothers
rampScaleFactorStart = (linspace(1,rampTime,rampTime)./rampTime)';
rampScaleFactorEnd = (linspace(rampTime,1,rampTime)./rampTime)';


%% calculate SNR ratios

    RMS_Sout = exp(SNR(i)/20) * RMS_N; %(i);
    scaleFactor = RMS_Sout/RMS_Sin;
    scaledS = S.*scaleFactor; % check: isequal(fix(rms(adj_S)),fix(target_rms_S_SNR(i))) == 1
        
    % create SiN:
    N(1:rampTime,:) = N(1:rampTime,:).*rampScaleFactorStart;
    N(end-rampTime+1:end,:)=N(end-rampTime+1:end,:).*rampScaleFactorEnd;
    SiN = N + scaledS;
    
    backScalingFactor=RMS_Sin/mean(rms(SiN));
    
    SiNStim=SiN.*backScalingFactor;
   

end

