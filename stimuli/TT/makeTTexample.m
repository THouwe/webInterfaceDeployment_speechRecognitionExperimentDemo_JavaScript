inDir = 'C:\Users\Houwelin2\Desktop\ACexp_NodeJs\stimuli\TT\';
% [fast, fs] = psychwavread([inDir 'example_TT_fast.wav']);
% slow = psychwavread([inDir 'example_TT_slow.wav']);
[Mslow, Mfs] = psychwavread([inDir 'met1HzSoft_2min.wav']);
slowResamp = resample(slow,Mfs,fs);

figure;plot(Mslow)
hold on; plot(slow)

MslowMono = Mslow(:,1);

diff = length(MslowMono) - length(slowResamp);
silence = zeros([diff 1]);
slowSpeech = [slowResamp ; silence];

slowMetAndSpeech = MslowMono + slowSpeech;
sound(slowMetAndSpeech,Mfs)

slow2 = psychwavread([inDir 'slow2.wav']);
slow2Resamp = resample(slow2,Mfs,fs);
diff2 = length(MslowMono) - length(slow2Resamp);
silence2 = zeros([diff2 1]);
slowSpeech2 = [slow2Resamp ; silence2];
slowMetAndSpeech2 = MslowMono + slowSpeech2;

slowSpeech3 = slowSpeech2;
slowSpeech3(1:1.28*10^5) = 0;
slowMetAndSpeech3 = MslowMono + slowSpeech3;

slowSpeech4 = slowSpeech3(8001:end);
diff4 = length(slowSpeech3)-length(slowSpeech4);
slowSpeech4 = [slowSpeech4 ; zeros([diff4 1])];
slowMetAndSpeech4 = MslowMono + slowSpeech4;

slowSpeech5 = slowSpeech3(4001:end);
diff5 = length(slowSpeech3)-length(slowSpeech5);
slowSpeech5 = [slowSpeech5 ; zeros([diff5 1])];
slowMetAndSpeech5 = MslowMono + slowSpeech5;

slowMetSp = slowMetAndSpeech5(Mfs*4+1:Mfs*16);
psychwavwrite(slowMetSp,Mfs,[inDir 'egTTslow.wav']);


Mfast = psychwavread([inDir 'met2_5HzSoft_2min.wav']);
fastResamp = resample(fast,Mfs,fs);
MfastMono = Mfast(:,1);
fast2 = psychwavread([inDir 'fast2.wav']);
fast2Resamp = resample(fast2,Mfs,fs);
diff2 = length(MfastMono) - length(fast2Resamp);
silence2 = zeros([diff2 1]);
fastSpeech2 = [fast2Resamp ; silence2];
fastMetAndSpeech2 = MfastMono + fastSpeech2;

beatLen = Mfs/2.5;
fastSpeech3 = fastSpeech2(beatLen/4+1:end);
diff3 = length(fastSpeech2)-length(fastSpeech3);
fastSpeech3 = [fastSpeech3 ; zeros([diff3 1])];
fastMetAndSpeech3 = MfastMono + fastSpeech3;

fastSpeech4 = fastSpeech2(beatLen/2+1:end);
diff4 = length(fastSpeech2)-length(fastSpeech4);
fastSpeech4 = [fastSpeech4 ; zeros([diff4 1])];
fastMetAndSpeech4 = MfastMono + fastSpeech4;

fastMetAndSpeech5 = fastMetAndSpeech4;
fastMetAndSpeech5 = fastMetAndSpeech5(beatLen*4+1:beatLen*24);
psychwavwrite(fastMetAndSpeech5,Mfs,[inDir 'egTTfast.wav']);


