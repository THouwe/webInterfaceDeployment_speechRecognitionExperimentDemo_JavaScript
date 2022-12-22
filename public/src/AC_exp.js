////////////////////////////////////////////////////////////////////////////////
////////////////////////////// CONSTANTS ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var TODAY = new Date();
var DD = String(TODAY.getDate()).padStart(2, '0');
var MM = String(TODAY.getMonth() + 1).padStart(2, '0');
var YYYY = String(TODAY.getFullYear());
var DATE = YYYY + MM + DD;
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////////// DEFINE TIMELINE /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
        /* create timeline */
        var timeline = [];
        var introduction_timeline = {
          timeline: []
        };
        var Prolific_ID_timeline = {
          timeline: []
        };
        var calib_timeline = {
          timeline: []
        };
        var questionnaire_timeline = {
          timeline: []
        };
        var TT_timeline = {
          timeline: []
        };
        var TT_pre_timeline = {
          timeline: []
        };
        var TT_timeline_Demo = {
          timeline: []
        };
        var FWDS_timeline = {
          timeline: []
        };
        var BWDS_timeline = {
          timeline: []
        };
        var wordRec_timeline = {
          timeline: []
        };
        var wordRecSiN_timeline = {
          timeline: []
        };
        var wordRecNVS_timeline = {
          timeline: []
        };
        var wordRec_Demo_timeline = {
          timeline: []
        };
        var wordRecSiN_Demo_timeline = {
          timeline: []
        };
        var wordRecNVS_Demo_timeline = {
          timeline: []
        };
        var debrief_timeline = {
          timeline: []
        };

        var n_trials = 217;
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//////////////////////////// COLLECT PROLIFIC ID ///////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var Prolific_ID = {
  data: {
    screen_ID: "participant_ID"
  },
  type: "survey-html-form",
  preamble: // "<p>In order to make data anonymous, please insert below the first two
  // letters of your mother’s name followed by the first two letters of your father’s
  // name in capital letters without spaces. </p>" +
  "<p>Bitte geben Sie Ihren Prolific ID ein</p>",
  // "<p>Um die Antworten anonym zu machen, Bitte tragen Sie die ersten beiden Buchstaben " +
  // "des Vornamens Ihrer Mutter und die ersten zwei Buchstaben Ihres Vaters ein " +
  // "<b>in Großbuchstaben ohne Leerzeichen</b>.</p>" +
  //<p>For example, Luara + Ben = LABE.</p>" +
  // "<p>Zum Beispiel: Laura + Ben = LABE.</p>" +
  // "<p> </p>",
  html: "<p><input name='Part_ID' type='text' /></p>",
  button_label: "Fortfahren",
    on_finish: function(data) {
      data.responses = JSON.parse(data.responses);
      // console.log("data.responses: " + JSON.stringify(data.responses));
      jsPsych.data.addProperties({
        part_ID: data.responses.Part_ID,
      });
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
};
Prolific_ID_timeline.timeline.push(Prolific_ID);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////////// INTRODUCTION ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var ICF_inclCrit = {
  data: {
    screen_ID: "ICF_inclCrit"
  },
  type: "instructions",
  pages: [
    "<div style='float: left;'><img src='../../stimuli/imgs/UZH_logo.jpg' width='200' height='100' /img></div>" +
    "<div style='float: right;'><img src='../../stimuli/imgs/neuroling_logo_grayscale.jpg' width='150' height='100' /img></div>" +
    // Welcome to the experiment!
    "<p>Herzlich Willkommen zum Experiment.</p>" +
    "<p> </p>" +
    // "<p>This experiment about speech perception and production.</p>" +
    // "<p>You will be asked to listen to sounds through headphones and to record sounds through your computer’s microphone.</p>" +
    "<p>In diesem Experiment geht es um die Sprachwahrnehmung und Sprachproduktion.</p>" +
    "<p>Sie werden mit Kopfhörern Töne hören, sowie auch Töne mit ihrem Computer Mikrophon aufnehmen.</p>" +
    "<p> </p>" +
    // "<p>You can undertake this experiment if:</p>" +
    // "<p>- your mother tongue is German (including Swiss German)</p>" +
    // "<p>- your hearing is normal without the help of hearing aids</p>" +
    // "<p>- you have normal speaking abilities, including no stuttering</p>",
    "<p>Sie dürfen an diesem Experiment teilnehmen, wenn:</p>" +
    "<p>- Ihre Muttersprache Deutsch ist (inkl. Schweizerdeutsch)</p>" +
    "<p>- Sie ein gesundes Gehör haben (ohne Hörgerät)</p>" +
    "<p>- Sie keine Sprachstörungen haben (wie beispielsweise Stottern)</p>",
    "<div style='float: left;'><img src='../../stimuli/imgs/UZH_logo.jpg' width='200' height='100' /img></div>" +
    "<div style='float: right;'><img src='../../stimuli/imgs/neuroling_logo_grayscale.jpg' width='150' height='100' /img></div>" +
    // "<p>Please make sure you have headphones plugged in and that you are in a silent environment.</p>" +
    // "<p>If this is not the case, please come back at a later time!</p>" +
    "<p>Versichern Sie sich nun bitte, dass Sie Ihre Kopfhörer eingesteckt haben & Sie sich in einem ruhigen Raum befinden.</p>", // +
    // "<p>Falls dies nicht möglich ist, versuchen Sie es zu einem späteren Zeitpunkt!</p>",
    // "<p> </p>" +
    // "<p>The experiment will last about 45 minutes and you will be compensated with either 15 CHF or 1 VPS.</p>",
    // "<p>Das Experiment dauert etwa 45 Minuten. Sie erhalten entweder 15.- oder 1 Versuchspersonenstunde.</p>",
  ],
  show_clickable_nav: true,
  button_label_previous: "Zurück",
  button_label_next: "Fortfahren",
  on_start: function() {
    // set progress bar to 0 at the start of experiment
    jsPsych.setProgressBar(0);
  }
}

introduction_timeline.timeline.push(ICF_inclCrit);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////////// CALIBRATION /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
  var calib_preAudio = {
    type: 'html-button-response',
    // stimulus: "<p>Task 1/6: headphones check (duration: 30 seconds circa)</p>",
    stimulus: "<p>Aufgabe 1/6: Kopfhörer Check</p>" +
    "<p>(Dauer: ca. 30 Sekunden)</p>",
    choices: ["Abspielen"]
  };

  var calib_audioOut = {
    type: 'audio-keyboard-response',
    stimulus: '../../stimuli/calibration/partyCrowd11sec_eq.wav',
    choices: jsPsych.NO_KEYS,
    trial_duration: 10000,
    // prompt: "Adjust the volume so that you are comfortable and can hear the babble easily.",
    prompt: "Stellen Sie nun bitte die Lautstärke so ein, dass die Stimmen eine angenehme Lautstärke haben.",
  response_ends_trial: false
  }

  var calib_postAudio = {
    type: 'html-button-response',
    // stimulus: "<p>If you have adjusted the volume, you can proceed forward.</p>" +
    // "<p>Otherwise, replay the babble of voices.</p>",
    stimulus: "<p>Sie können die Aufnahme erneut wiedergeben lassen – Sobald " +
    "die Lautstärke angenehm ist, können Sie fortfahren.</p>",
    choices: ["Erneut abspielen", "Fortfahren"]
  };

  var calib_node = {
    timeline: [calib_audioOut, calib_postAudio],
    loop_function: function(data){
      if(jsPsych.data.get().last(1).values()[0].button_pressed == 0){
          return true;
      } else {
          return false;
      }
    }
  }

/////

  var calib_preRecord = {
    type: 'instructions',
    data: {
      screen_ID: "instructions_calib_preRecord"
    },
    // Task 2/6: microphone check (duration: 30 seconds circa)
    pages: ["<p>Aufgabe 2/6: Mikrophon Check</p>" +
    "<p>(Dauer: ca. 30 Sekunden)</p>",
    // "<p>Please press 'next' to record a message and play it back to check that the microphone is recording.</p>" +
    // "<p>A pop-out window will ask you to allow the browser access to the computer microphone.</p>" +
    // "<p>If you are using Mozilla Firefox, click on «Remember this decision» before you click on «Allow» (left picture), so that you won’t need to do this again later.</p>" +
    // "<p>If you are using Google Chrome, just click on «Allow» (right picture); you may be asked to do this again later on.</p>" +
    "<p>Um sicherzugehen, dass Ihr Mikrophon aufzeichnet, drücken Sie nun bitte auf “Fortfahren” um eine " +
    "Nachricht aufzunehmen und anschliessend wiederzugeben.</p>",
    "<p>Es sollte ein Pop-Up Fenster aufgehen:  Sie werden gefragt, ob der Browser auf Ihr Mikrophon zugreifen darf.</p>" +
    "<p>Falls Sie Mozilla Firefox nutzen, drücken Sie bitte auf “Erinnern” (siehe rechtes Bild), bevor sie es erlauben  (siehe linkes Bild).</p>" +
    "<p>Falls Sie Google Chrome nutzen, drücken Sie “Erlauben”.</p>" +
    // "<p>Bitte drücken Sie «Fortfahren», um eine Nachricht aufzunehmen und wiederzugeben, um zu überprüfen, ob das Mikrofon aufzeichnet.</p>" +
    // "<p>Es wird ein Pop-Up Fenster aufgehen und Sie werden gefragt, ob der Browser auf Ihr Mikrophon zugreifen darf.</p>" +
    // "<p>Falls Sie Mozilla Firefox nutzen, drücken Sie bitte auf “Erinnern” (siehe rechtes Bild), bevor sie es erlauben  (siehe linkes Bild).</p>" +
    // "<p>Falls Sie Google Chrome nutzen, drücken Sie einfach erlauben.</p>" +
    "<div style='float: left;'><img src='../../stimuli/imgs/fireFox3.jpg' width='250' height='100' /img></div>" +
    "<div style='float: right;'><img src='../../stimuli/imgs/chrome2.jpg' width='300' height='100' /img></div>",
    // ADDED 2020/12/21:
    // "<p>Speak loud and clearly and make sure you are able to hear your voice clearly when playing back the recording.</p>" +
    // "<p>If not, make sure the microphone of your device is turned on and try again.</p>" +
    // "<p>Note that if the recordings you will be asked to perform next do not contain software-recognisable " +
    // "speech we will need to ask you to return your submission.</p>",
    "<p>Sprechen Sie bitte laut und deutlich. Vergewissern Sie sich beim Widergeben, dass sie Ihre Stimme gut hören können.</p>" +
    "<p>Falls dies nicht der Fall ist, kontrollieren Sie, ob ihr Mikrophon eingeschaltet ist und wiederholen Sie den Vorgang.</p>" +
    "<p>Bitte beachten Sie, dass falls Ihre Aufnahmen nicht verständlich sind und genutzt werden können, Ihre Teilnahme leider nicht gültig ist.</p>"
  ],
  show_clickable_nav: true,
  button_label_previous: "Zurück",
  button_label_next: "Fortfahren",
  on_finish: function() {
      // at the end of each trial, update the progress bar
      // based on the current value and the proportion to update for each trial
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
  }
};

  var calib_recordIn = {
    type: 'html-audio-response',
    // stimulus: "speak please"
    stimulus: "Sprechen Sie nun bitte"
    };

/////// PUSH CALIBRATION TRIALS TO CALIBRATION TIMELINE /////////
  calib_timeline.timeline.push(calib_preAudio);
  calib_timeline.timeline.push(calib_node);
  calib_timeline.timeline.push(calib_preRecord);
  calib_timeline.timeline.push(calib_recordIn);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
///////////////////////////// QUESTIONNAIRE ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var start_quest = {
  type: 'html-button-response',
  // stimulus: "<p>Task 3/6: A few questions about yourself (duration: 3 minutes)</p>" +
  stimulus: "<p>Aufgabe 3/6: Nun möchten wir Ihnen noch ein paar allgemeine Fragen zu Ihrer Person stellen.</p>" +
  "<p> </p>" +
  "<p>(Dauer: ca. 3 Minuten)</p>",
  choices: ["Fortfahren"],
  on_finish: function() {
    var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
}
};

// var participant_ID = {
//   data: {
//     screen_ID: "participant_ID"
//   },
//   type: "survey-html-form",
//   preamble: // "<p>In order to make data anonymous, please insert below the first two
//   // letters of your mother’s name followed by the first two letters of your father’s
//   // name in capital letters without spaces. </p>" +
//   "<p>Damit Ihre Antworten anonymisiert sind, bitten wir Sie, die ersten beiden Buchstaben " +
//   "des Vornamens Ihrer Mutter & die ersten beiden Buchstaben des Vornamens Ihres Vaters anzugeben.</p>" +
//   "<p>Zum Beispiel: Laura + Ben = LABE.</p>" +
//   "<p> </p>",
//   // "<p>Um die Antworten anonym zu machen, Bitte tragen Sie die ersten beiden Buchstaben " +
//   // "des Vornamens Ihrer Mutter und die ersten zwei Buchstaben Ihres Vaters ein " +
//   // "<b>in Großbuchstaben ohne Leerzeichen</b>.</p>" +
//   //<p>For example, Luara + Ben = LABE.</p>" +
//   // "<p>Zum Beispiel: Laura + Ben = LABE.</p>" +
//   // "<p> </p>",
//   html: "<p><input name='Part_ID' type='text' /></p>",
//   button_label: "Fortfahren",
//   // html:  <input name='Part_ID type='text' />
//   on_finish: function(data){
//     data.responses = JSON.parse(data.responses);
//     console.log("data.responses: " + JSON.stringify(data.responses));
//     jsPsych.data.addProperties({
//       part_ID: data.responses.Part_ID,
//     });
//     // console.log("jsPsych data: " + JSON.stringify(jsPsych.data.get().values()));
//         var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
//         jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
//   }
// };

var age = {
  data: {screen_id: "age"},
  type: 'survey-html-form',
  // preamble: "Your age in years:",
  preamble: "Ihr Alter in Jahren:",
  html: "<p><input name='Age' type='text' /></p>",
  button_label: "Fortfahren",
  on_finish: function() {
    var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
  }
};

var gender = {
  data: {screen_id: "gender"},
  type: 'html-button-response',
  // stimulus: "your gender:",
  // choices: ["Female", "Male", "Intersex", "Prefer not to answer"]
  stimulus: "Ihr Geschlecht:",
  choices: ["weiblich", "männlich", "intersexuell", "keine Antwort"],
  on_finish: function() {
    var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
  }
};

// var dialect = {
//   data: {screen_id: "dialect"},
//   type: 'survey-html-form',
//   // preamble: "From which region is your dialect? (e.g., Zurich, Bern, St. Gallen)",
//   // html: "<p>Region: <input name='Dialect' type='text' /></p>"
//   preamble: "Ihr Dialekt (z.B., Zürich, Bern, St. Gallen)",
//   html: "<p><input name='Dialect' type='text' /></p>",
//   button_label: "Fortfahren"
// };

var mother_tongues = {
  data: {screen_id: "other_mother_tongues"},
  type: 'survey-html-form',
  // preamble: "<p>Is German (including Swiss German) your only mother tongue?</p>" +
  // "<p>If yes, please write «Yes»; otherwise, please write the name " +
  // "of your other mother tongue(s), (e.g., French, Serbian, Farsi).</p>" +
  // "<p>Use commas if you write more than one.</p>",
  // html: "<p>Other mother tongues: <input name='other_mother_tongues' type='text' /></p>"
  // preamble: "<p>Ist Deutsch (incl. Schweizerdeutsch) Ihre einzige Muttersprache?</p>" +
  // "<p>Wenn ja, drucken Sie bitte «Fortfahren»; Andernfalls schreiben Sie bitte den Namen " +
  // "Ihrer anderen Muttersprache(n) (z.B. Französisch, Serbisch, Persisch).</p>" +
  // "<p>Verwenden Sie Kommas, wenn Sie mehr als eines schreiben.</p>",
  preamble: "<p>Ist Deutsch (inkl. Schweizerdeutsch) Ihre einzige Muttersprache?</p>" +
  "<p>Falls ja, drucken Sie bitte «Fortfahren». Andernfalls schreiben Sie bitte Ihre weiteren Muttersprache(n) " +
  "Verwenden Sie Kommas, wenn Sie mehr als eine Sprache schreiben (z.B. Französisch, Serbisch, Persisch).</p>",
  button_label: "Fortfahren",
  html: "<p><input name='other_mother_tongues' type='text' /></p>",
  on_finish: function() {
    var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
  }
};

var second_languages = {
  type: 'html-button-response',
  // stimulus: "<p>If you have adjusted the volume, you can proceed forward.</p>" +
  // "<p>Otherwise, replay the babble of voices.</p>",
  stimulus: "<p>Wie viele Zweitsprachen sprechen Sie?</p>",
  choices: ["0", "1", "2", "3", ">3"],
  on_finish: function(){
    if(jsPsych.data.get().last(1).values()[0].button_pressed == 0){
        var nr_second_language_screens = 0;
    } else if(jsPsych.data.get().last(1).values()[0].button_pressed == 1){
        var nr_second_language_screens = 1;
    } else if(jsPsych.data.get().last(1).values()[0].button_pressed == 2){
        var nr_second_language_screens = 2;
    }  else if(jsPsych.data.get().last(1).values()[0].button_pressed == 3){
        var nr_second_language_screens = 3;
      } else {
        var nr_second_language_screens = 99;
      }
    jsPsych.data.get().addToAll({nr_2nd_lang: nr_second_language_screens});
    // var this_trial = jsPsych.data.get().last(1).values()[0].trial_index;
    console.log("button pressed = " + jsPsych.data.get().last(1).values()[0].button_pressed);
    console.log("value added to data = " + jsPsych.data.get().last(1).values()[0].nr_2nd_lang);
    // console.log("this trial = " + this_trial)
    var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
  }
};

  var second_languages_page_1 = {
  data: {screen_id: "second_languages_1"},
  type: 'survey-text',
  questions: [
    {prompt: "Weitere Sprache Nr.1", placeholder: "Sprache"},
    {prompt: "Alter bei Erwerbsbeginn in Sprache Nr.1", placeholder: "Alter"},
    {prompt: "Sprachkenntnisse in Sprache Nr.1 (1-7)", placeholder: "Bewertung von 1 (niedrig) bis 7 (hoch)"}
  ],
    preamble: "<p>für jede der (nicht muttersprachlichen) gesprochenen Sprachen (max. 3), " +
    "Schreiben Sie bitte den Namen der Sprache, das Alter, in welchem Sie mit dem Erwerb begonnen haben, " +
    "und eine Bewertung von 1 (niedrig) bis 7 (hoch), für ihre Sprachkenntnisse in der Sprache (max. 3 Sprachen).</p>",
    button_label: "Fortfahren",
}

var second_languages_page_2 = {
data: {screen_id: "second_languages_2"},
type: 'survey-text',
questions: [
  {prompt: "Weitere Sprache Nr.2", placeholder: "Sprache"},
  {prompt: "Alter bei Erwerbsbeginn in Sprache Nr.2", placeholder: "Alter"},
  {prompt: "Sprachkenntnisse in Sprache Nr.2 (1-7)", placeholder: "Bewertung von 1 (niedrig) bis 7 (hoch)"}
],
  preamble: "<p>für jede der (nicht muttersprachlichen) gesprochenen Sprachen (max. 3)," +
  "Schreiben Sie bitte den Namen der Sprache, das Alter, in welchem Sie mit dem Erwerb begonnen haben, " +
  "und eine Bewertung von 1 (niedrig) bis 7 (hoch), für ihre Sprachkenntnisse in der Sprache (max. 3 Sprachen).</p>",
  button_label: "Fortfahren",
}

  var second_languages_page_3 = {
  data: {screen_id: "second_languages_3"},
  type: 'survey-text',
  questions: [
    {prompt: "Weitere Sprache Nr.3", placeholder: "Sprache"},
    {prompt: "Alter bei Erwerbsbeginn in Sprache Nr.3", placeholder: "Alter"},
    {prompt: "Sprachkenntnisse in Sprache Nr.3 (1-7)", placeholder: "Bewertung von 1 (niedrig) bis 7 (hoch)"}
  ],
    preamble: "<p>für jede der (nicht muttersprachlichen) gesprochenen Sprachen (max. 3), " +
    "Schreiben Sie bitte den Namen der Sprache, das Alter, in welchem Sie mit dem Erwerb begonnen haben, " +
    "und eine Bewertung von 1 (niedrig) bis 7 (hoch), für ihre Sprachkenntnisse in der Sprache (max. 3 Sprachen).</p>",
    button_label: "Fortfahren",
}

var if_node_1 = {
  chunk_type: 'if',
    timeline: [second_languages_page_1],
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var nr_2nd_lang = jsPsych.data.get().values()[0].nr_2nd_lang;
        if(nr_2nd_lang == 0){
            return false;
        } else {
            return true;
        }
    }
}

var if_node_2 = {
  chunk_type: 'if',
    timeline: [second_languages_page_2],
    conditional_function: function(){
        var nr_2nd_lang = jsPsych.data.get().values()[0].nr_2nd_lang;
        if(nr_2nd_lang == 0 || nr_2nd_lang == 1){
            return false;
        } else {
            return true;
        }
    }
}

var if_node_3 = {
  chunk_type: 'if',
    timeline: [second_languages_page_3],
    conditional_function: function(){
        var nr_2nd_lang = jsPsych.data.get().values()[0].nr_2nd_lang;
        if(nr_2nd_lang == 0 || nr_2nd_lang == 1 || nr_2nd_lang == 2){
            return false;
        } else {
            return true;
        }
    }
}

questionnaire_timeline.timeline.push(start_quest);
// questionnaire_timeline.timeline.push(participant_ID);
questionnaire_timeline.timeline.push(age);
questionnaire_timeline.timeline.push(gender);
// questionnaire_timeline.timeline.push(dialect);
questionnaire_timeline.timeline.push(mother_tongues);
questionnaire_timeline.timeline.push(second_languages);
questionnaire_timeline.timeline.push(if_node_1);
questionnaire_timeline.timeline.push(if_node_2);
questionnaire_timeline.timeline.push(if_node_3);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
/////////////////////////// TONGUE TWISTERS ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
  var tonguetwistersList_A_timeline_variables = [
      {tongueTwist: '<p style="font-size:50px"><b>Teich Deich Teich Deich</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Teich Deich Teich Deich'}},
      {tongueTwist: '<p style="font-size:50px"><b>Till Dill Till Dill</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Till Dill Till Dill'}},
      {tongueTwist: '<p style="font-size:50px"><b>Tier Dir Tier Dir</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Tier Dir Tier Dir'}},
      {tongueTwist: '<p style="font-size:50px"><b>Torf Dorf Torf Dorf</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Torf Dorf Torf Dorf'}},
      {tongueTwist: '<p style="font-size:50px"><b>Tick Dick Tick Dick</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Tick Dick Tick Dick'}},
      {tongueTwist: '<p style="font-size:50px"><b>Tipp Dip Tipp Dip</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Tipp Dip Tipp Dip'}},
      {tongueTwist: '<p style="font-size:50px"><b>Tank Dank Tank Dank</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Tank Dank Tank Dank'}},
      {tongueTwist: '<p style="font-size:50px"><b>Tal Dal Tal Dal</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Tal Dal Tal Dal'}},
      {tongueTwist: '<p style="font-size:50px"><b>Beil Peil Beil Peil</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Beil Peil Beil Peil'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bin Pin Bin Pin</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bin Pin Bin Pin'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bein Pein Bein Pein</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bein Pein Bein Pein'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bier Pier Bier Pier</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bier Pier Bier Pier'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bar Paar Bar Paar</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bar Paar Bar Paar'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bett Pet Bett Pet</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bett Pet Bett Pet'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bellt Pellt Bellt Pellt</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Bellt Pellt Bellt Pellt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Back Pack Back Pack</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABAB', tongueTwist: 'Back Pack Back Pack'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kern Gern Kern Gern</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kern Gern Kern Gern'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kuss Guss Kuss Guss</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kuss Guss Kuss Guss'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kurt Gurt Kurt Gurt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kurt Gurt Kurt Gurt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kalt Galt Kalt Galt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kalt Galt Kalt Galt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kaff Gaff Kaff Gaff</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kaff Gaff Kaff Gaff'}},
      {tongueTwist: '<p style="font-size:50px"><b>Keil Geil Keil Geil</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Keil Geil Keil Geil'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kur Gur Kur Gur</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kur Gur Kur Gur'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kilt Gilt Kilt Gilt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Kilt Gilt Kilt Gilt'}}
  ];

  var tonguetwistersList_B_timeline_variables = [
      {tongueTwist: '<p style="font-size:50px"><b>Deich Teich Deich Teich</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Deich Teich Deich Teich'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dill Till Dill Till</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dill Till Dill Till'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dir Tier Dir Tier</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dir Tier Dir Tier'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dorf Torf Dorf Torf</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dorf Torf Dorf Torf'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dick Tick Dick Tick</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dick Tick Dick Tick'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dip Tipp Dip Tipp</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dip Tipp Dip Tipp'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dank Tank Dank Tank</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dank Tank Dank Tank'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dal Tal Dal Tal</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BABA', tongueTwist: 'Dal Tal Dal Tal'}},
      {tongueTwist: '<p style="font-size:50px"><b>Peil Beil Peil Beil</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Peil Beil Peil Beil'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pin Bin Pin Bin</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pin Bin Pin Bin'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pein Bein Pein Bein</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pein Bein Pein Bein'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pier Bier Pier Bier</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pier Bier Pier Bier'}},
      {tongueTwist: '<p style="font-size:50px"><b>Paar Bar Paar Bar</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Paar Bar Paar Bar'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pet Bett Pet Bett</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pet Bett Pet Bett'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pellt Bellt Pellt Bellt</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pellt Bellt Pellt Bellt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pack Back Pack Back</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BABA', tongueTwist: 'Pack Back Pack Back'}},
      {tongueTwist: '<p style="font-size:50px"><b>Gern Kern Gern Kern</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Gern Kern Gern Kern'}},
      {tongueTwist: '<p style="font-size:50px"><b>Guss Kuss Guss Kuss</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Guss Kuss Guss Kuss'}},
      {tongueTwist: '<p style="font-size:50px"><b>Gurt Kurt Gurt Kurt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Gurt Kurt Gurt Kurt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Galt Kalt Galt Kalt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Galt Kalt Galt Kalt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Gaff Kaff Gaff Kaff</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Gaff Kaff Gaff Kaff'}},
      {tongueTwist: '<p style="font-size:50px"><b>Geil Keil Geil Keil</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Geil Keil Geil Keil'}},
      {tongueTwist: '<p style="font-size:50px"><b>Gur Kur Gur Kur</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Gur Kur Gur Kur'}},
      {tongueTwist: '<p style="font-size:50px"><b>Gilt Kilt Gilt Kilt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BABA', tongueTwist: 'Gilt Kilt Gilt Kilt'}}
  ];

  var tonguetwistersList_C_timeline_variables = [
      {tongueTwist: '<p style="font-size:50px"><b>Teich Deich Deich Teich</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Teich Deich Deich Teich'}},
      {tongueTwist: '<p style="font-size:50px"><b>Till Dill Dill Till</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Till Dill Dill Till'}},
      {tongueTwist: '<p style="font-size:50px"><b>Tier Dir Dir Tier</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Tier Dir Dir Tier'}},
      {tongueTwist: '<p style="font-size:50px"><b>Torf Dorf Dorf Torf</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Torf Dorf Dorf Torf'}},
      {tongueTwist: '<p style="font-size:50px"><b>Tick Dick Dick Tick</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Tick Dick Dick Tick'}},
      {tongueTwist: '<p style="font-size:50px"><b>Tipp Dip Dip Tipp</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Tipp Dip Dip Tipp'}},
      {tongueTwist: '<p style="font-size:50px"><b>Tank Dank Dank Tank</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Tank Dank Dank Tank'}},
      {tongueTwist: '<p style="font-size:50px"><b>Tal Dal Dal Tal</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABBA', tongueTwist: 'Tal Dal Dal Tal'}},
      {tongueTwist: '<p style="font-size:50px"><b>Beil Peil Peil Beil</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Beil Peil Peil Beil'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bin Pin Pin Bin</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bin Pin Pin Bin'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bein Pein Pein Bein</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bein Pein Pein Bein'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bier Pier Pier Bier</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bier Pier Pier Bier'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bar Paar Paar Bar</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bar Paar Paar Bar'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bett Pet Pet Bett</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bett Pet Pet Bett'}},
      {tongueTwist: '<p style="font-size:50px"><b>Bellt Pellt Pellt Bellt</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Bellt Pellt Pellt Bellt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Back Pack Pack Back</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'ABBA', tongueTwist: 'Back Pack Pack Back'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kern Gern Gern Kern</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kern Gern Gern Kern'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kuss Guss Guss Kuss</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kuss Guss Guss Kuss'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kurt Gurt Gurt Kurt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kurt Gurt Gurt Kurt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kalt Galt Galt Kalt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kalt Galt Galt Kalt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kaff Gaff Gaff Kaff</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kaff Gaff Gaff Kaff'}},
      {tongueTwist: '<p style="font-size:50px"><b>Keil Geil Geil Keil</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Keil Geil Geil Keil'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kur Gur Gur Kur</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kur Gur Gur Kur'}},
      {tongueTwist: '<p style="font-size:50px"><b>Kilt Gilt Gilt Kilt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABBA', tongueTwist: 'Kilt Gilt Gilt Kilt'}}
  ];

  var tonguetwistersList_D_timeline_variables = [
      {tongueTwist: '<p style="font-size:50px"><b>Deich Teich Teich Deich</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Deich Teich Teich Deich'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dill Till Till Dill</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dill Till Till Dill'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dir Tier Tier Dir</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dir Tier Tier Dir'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dorf Torf Torf Dorf</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dorf Torf Torf Dorf'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dick Tick Tick Dick</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dick Tick Tick Dick'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dip Tipp Tipp Dip</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dip Tipp Tipp Dip'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dank Tank Tank Dank</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dank Tank Tank Dank'}},
      {tongueTwist: '<p style="font-size:50px"><b>Dal Tal Tal Dal</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'BAAB', tongueTwist: 'Dal Tal Tal Dal'}},
      {tongueTwist: '<p style="font-size:50px"><b>Peil Beil Beil Peil</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Peil Beil Beil Peil'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pin Bin Bin Pin</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pin Bin Bin Pin'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pein Bein Bein Pein</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pein Bein Bein Pein'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pier Bier Bier Pier</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pier Bier Bier Pier'}},
      {tongueTwist: '<p style="font-size:50px"><b>Paar Bar Bar Paar</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Paar Bar Bar Paar'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pet Bett Bett Pet</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pet Bett Bett Pet'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pellt Bellt Bellt Pellt</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pellt Bellt Bellt Pellt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Pack Back Back Pack</b></p>', data: {screen_id: TT_trial, PoA: 'labial', rhyme_scheme:'BAAB', tongueTwist: 'Pack Back Back Pack'}},
      {tongueTwist: '<p style="font-size:50px"><b>Gern Kern Kern Gern</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Gern Kern Kern Gern'}},
      {tongueTwist: '<p style="font-size:50px"><b>Guss Kuss Kuss Guss</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Guss Kuss Kuss Guss'}},
      {tongueTwist: '<p style="font-size:50px"><b>Gurt Kurt Kurt Gurt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Gurt Kurt Kurt Gurt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Galt Kalt Kalt Galt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Galt Kalt Kalt Galt'}},
      {tongueTwist: '<p style="font-size:50px"><b>Gaff Kaff Kaff Gaff</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Gaff Kaff Kaff Gaff'}},
      {tongueTwist: '<p style="font-size:50px"><b>Geil Keil Keil Geil</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Geil Keil Keil Geil'}},
      {tongueTwist: '<p style="font-size:50px"><b>Gur Kur Kur Gur</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Gur Kur Kur Gur'}},
      {tongueTwist: '<p style="font-size:50px"><b>Gilt Kilt Kilt Gilt</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'BAAB', tongueTwist: 'Gilt Kilt Kilt Gilt'}}
  ];

///////////////////

  var TT_pre_trial = {
    type: 'html-button-response',
    stimulus: jsPsych.timelineVariable('tongueTwist'),
    choices: ['Langsamen Durchgang starten']
    // choices: ['Trainingsdurchgang starten']
  };

  var TT_practice = {
      type: "audio-upload-audio-practice",
      audio_out: '../../stimuli/TT/met1HzSoft_2min.wav',
      choices: ['Langsamen Durchgang beenden und schnell Durchgang starten'],
      // choices: ['Trainingsdurchgang beenden und Aufnahme starten'],
      prompt: jsPsych.timelineVariable('tongueTwist')
  };

  var TT_trial = {
      type: "audio-upload-audio",
      audio_out: '../../stimuli/TT/met2_5HzSoft_2min.wav',
      choices: ['Durchgang beenden und mit dem nächsten Zungenbrecher fortfahren'],
      prompt: jsPsych.timelineVariable('tongueTwist'), //+ "<p>(x3)</p>",
      on_finish: function() {
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
      }
  };

///////////////////

  var TTtest_procedure_blockA = {
    timeline: [TT_pre_trial, TT_practice, TT_trial],
    timeline_variables: tonguetwistersList_A_timeline_variables,
    randomize_order: true
    // repetitions: 1
  };
  // timeline.push(TTtest_procedure_blockA);

  var TTtest_procedure_blockB = {
    timeline: [TT_pre_trial, TT_practice, TT_trial],
    timeline_variables: tonguetwistersList_B_timeline_variables,
    randomize_order: true
    // repetitions: 1
  };
  // timeline.push(TTtest_procedure_blockB);

  var TTtest_procedure_blockC = {
    timeline: [TT_pre_trial, TT_practice, TT_trial],
    timeline_variables: tonguetwistersList_C_timeline_variables,
    randomize_order: true
    // repetitions: 1
  };
  // timeline.push(TTtest_procedure_blockC);

  var TTtest_procedure_blockD = {
    timeline: [TT_pre_trial, TT_practice, TT_trial],
    timeline_variables: tonguetwistersList_D_timeline_variables,
    randomize_order: true
    // repetitions: 1
  };
  // timeline.push(TTtest_procedure_blockD);

  var randomizedTTblocks = jsPsych.randomization.shuffle([TTtest_procedure_blockA, TTtest_procedure_blockB, TTtest_procedure_blockC, TTtest_procedure_blockD]);
  TT_timeline.timeline = randomizedTTblocks;


  /* pages 2-4. Instructions */
  var instructions_TT_1 = {
    type: 'instructions',
    data: {
      screen_ID: "instructions_TT_1"
    },
    // Task 4/6: Tongue twisters (duration: 25 minutes circa)
    pages: ["<p>Aufgabe 4/6: Zungenbrechertest</p>" +
    "<p>(Dauer: ca. 25 Minuten)</p>",
    // "<p>As part of this task, you will be asked to repeat out loud a number of tongue twisters at a slower and faster rates.</p>" +
    "<p>Im Rahmen dieser Aufgabe werden Sie aufgefordert, eine Reihe von Zungenbrechern langsamer und schneller laut zu wiederholen.<p>",
    // As soon as you press “Start slow trial” you will hear a slow “click” rhythm, which  will be referred to as the “metronome”.
    // Please wait at least four clicks and repeat out loud the four words displayed on the screen (the tongue twister),
    // in time with the metronome, at a rate of one word per click.
    // Once you have repeated the tongue twister, wait at least four beats and click on the "End slow run and start fast run" button.
    "<p>Sobald Sie „Start“ drücken, hören Sie einen langsamen Rhythmus, dieser wird als Metronom bezeichnet.</p>" +
    "<p>Bitte wiederholen Sie dann die vier Wörter, welche Sie auf dem Bildschirm sehen (Zungenbrecher) im Takt des Metronoms und drücken dann „Stop“.</p>",
    // "<p><b>Bitte warten Sie mindestens vier Klicks und wiederholen Sie die vier auf dem Bildschirm angezeigten Wörter (der Zungenbrecher) im Takt des Metronoms mit einer Rate von einem Wort pro Klick.</b></p> " +
    // "<p><b>Wenn Sie den Zungenbrecher wiederholt haben, warten Sie mindestens vier Schläge und klicken Sie auf die Schaltfläche «Langsamen Durchgang beenden und schnell Durchgang starten».</p>",
    // You will hear the metronome again, but this time it will play a faster click rhythm.
    // Please wait at least four clicks and repeat the tongue twister three times in a row without pauses, in time with the metronome.
    // When you have repeated the tongue twister three times, wait for at least four more clicks and then press "End trial and move to the next tongue twister".
    ],
    show_clickable_nav: true,
    button_label_previous: "Zurück",
    button_label_next: "Fortfahren",
    on_finish: function() {
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
  };

  var example_slow_TT_trial = {
    type: 'audio-keyboard-response',
    data: {screen_id: "example_slow_TT_trial"},
    stimulus: "../../stimuli/TT/egTTslow.wav",
    prompt: "<p>Beispiel von <b>langsamen</b> Durchgang.</p>" +
    "<p>In diesem Fall ist der zu wiederholende Zungenbrecher:</p>" +
    "<p><i>`Peil Beil Beil Peil`</i></p>",
    // "<p>Ein Beispiel von einen <b>langsamen</b> Rhythmus Durchgang</p>",
    choices: jsPsych.NO_KEYS,
    trial_ends_after_audio: true,
    on_finish: function() {
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
  };

  var instructions_TT_2 = {
    type: 'instructions',
    data: {
      screen_ID: "instructions_TT_2"
    },
    // Task 4/6: Tongue twisters (duration: 25 minutes circa)
    pages: [
    "<p>Sie hören erneut das Metronom, diesmal jedoch in einem schnelleren Rhythmus.</p>" +
    "<p>Bitte wiederholen Sie dann den Zungenbrecher <b>dreimal nacheinander, ohne Pause</b> im Rhythmus des Metronoms und drücken dann „Stop“</p>",
    // "<p>Sie werden das Metronom wieder hören, aber diesmal spielt es einen schnelleren Klickrhythmus.</p>" +
    // "<p><b>Bitte warten Sie mindestens vier Klicks und wiederholen Sie den Zungenbrecher dreimal hintereinander ohne Pausen, pünktlich zum Metronom.</b></p>" +
    // "<p><b>Wenn Sie den Zungenbrecher dreimal wiederholt haben, warten Sie mindestens vier weitere Klicks und drücken Sie dann «Durchgang beenden und fahren mit dem nächsten Zungenbrecher fort».</b></p>",
    // "<p>Please press 'next' to hear an example of an acceptable slow trial followed by an example of an acceptable fast trial.</p>" +
    // "<p>Nun werden Sie ein Beispiel für die langsame Version und im Anschluss eines für die schnelle Version hören.</p>"
    ],
    show_clickable_nav: true,
    button_label_previous: "Zurück",
    button_label_next: "Fortfahren",
    on_finish: function() {
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
  };

  var example_fast_TT_trial = {
    type: 'audio-keyboard-response',
    data: {screen_id: "example_fast_TT_trial"},
    stimulus: "../../stimuli/TT/egTTfast.wav",
    prompt: "<p>Beispiel von <b>schnellen</b> Durchgang.</p>" +
    "<p>In diesem Fall ist der zu wiederholende Zungenbrecher:</p>" +
    "<p><i>`Peil Beil Beil Peil`</i></p> (x3)",
    // "<p>Ein Beispiel von einen <b>schnellen</b> Rhythmus Durchgang</p>",
    choices: jsPsych.NO_KEYS,
    trial_ends_after_audio: true,
    on_finish: function() {
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
  };

    // ADDED 2020/12/21
    var TT_instructions_check_1 = {
      type: 'html-button-response',
      stimulus: "<p>Um sicher zu gehen, dass Sie die Instruktionen verstanden haben, " +
      "geben Sie nun bitte an, wie oft der <b>langsame</b> Zungenbrecher wiederholt werden soll:</p>",
      // "<p><b><i>Instructions understanding check:</i></b></p>" +
      // "<p>How many times do you need to repeat the tongue twister for " +
      // "during each <b>slow</b> rhythm trial?</p>",
      choices: ['1','2','3','4'],
      on_finish: function() {
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
      }
    };

    var TT_instructions_check_1_answer = {
      type: 'html-keyboard-response',
      stimulus: "<p><b>korrekte Antwort: 1</b></p>",
      // "<p><b>Correct response: 1</b></p>",
      choices: jsPsych.NO_KEYS,
      trial_duration: 3000, //jsPsych.timelineVariable("shuffled_ITIs_SiN"),
      data: {screen_id: "ITI_wordRec"},
    };

    var TT_instructions_check_2 = {
      type: 'html-button-response',
      stimulus: "<p>Um sicher zu gehen, dass Sie die Instruktionen verstanden haben, " +
      "geben Sie nun bitte an, wie oft der <b>schnelle</b> Zungenbrecher wiederholt werden soll:</p>",
      // "<p><b><i>Instructions understanding check:</i></b></p>" +
      // "<p>How many times do you need to repeat the tongue twister for " +
      // "during each <b>slow</b> rhythm trial?</p>",
      choices: ['1','2','3','4'],
      on_finish: function() {
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
      }
    };

  var TT_instructions_check_2_answer = {
    type: 'html-keyboard-response',
    stimulus: "<p><b>korrekte Antwort: 3</b></p>",
    // "<p><b>Correct response: 3</b></p>",
    choices: jsPsych.NO_KEYS,
    trial_duration: 3000, //jsPsych.timelineVariable("shuffled_ITIs_SiN"),
    data: {screen_id: "ITI_wordRec"},
  };

  // TT_timeline = TT_timeline.timeline.concat(randomizedTTblocks);
    TT_pre_timeline.timeline = [instructions_TT_1, example_slow_TT_trial, instructions_TT_2, example_fast_TT_trial,
    TT_instructions_check_1, TT_instructions_check_1_answer,
    TT_instructions_check_2, TT_instructions_check_2_answer];

/////// PUSH TT TRIALS TO CALIBRATION TIMELINE /////////
  // TT_timeline.timeline.push(TTtest_procedure_blockA);
  // TT_timeline.timeline.push(TTtest_procedure_blockB);
  // TT_timeline.timeline.push(TTtest_procedure_blockC);
  // TT_timeline.timeline.push(TTtest_procedure_blockD);
  // timeline.push(TT_timeline);
//////////////////////////////// DEMO //////////////////////////////////////////

var tonguetwistersList_Demo_timeline_variables = [
    {tongueTwist: '<p style="font-size:50px"><b>Nr. 1</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Nr. 1'}},
    {tongueTwist: '<p style="font-size:50px"><b>Nr. 2</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Nr. 2'}},
    {tongueTwist: '<p style="font-size:50px"><b>Nr. 3</b></p>', data: {screen_id: TT_trial, PoA: 'alveolar', rhyme_scheme:'ABAB', tongueTwist: 'Nr. 3'}},
    {tongueTwist: '<p style="font-size:50px"><b>Nr. 4</b></p>', data: {screen_id: TT_trial, PoA: 'velar', rhyme_scheme:'ABAB', tongueTwist: 'Nr. 4'}}
];

var TTtest_procedure_Demo = {
  timeline: [TT_pre_trial, TT_practice, TT_trial],
  timeline_variables: tonguetwistersList_Demo_timeline_variables //,
  // randomize_order: true
  // repetitions: 1
};

TT_timeline_Demo.timeline.push(TTtest_procedure_Demo);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// FWDS ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
  var instructions_DS = {
    data: {screen_id: "instructions_DS"},
    type: 'instructions',
    pages: [
      // Task 5/6: digit test (duration: 4 minutes circa)
      "<p>Aufgabe 5/6: Zifferntest</p>" +
      "<p>(Dauer: ca. 4 Minuten)</p>",
      // As part of this task, you will hear a series of digits, from 1 to 9, and will be asked to
      // memorize the sequence and use the keyboard to repeat it when prompted.
      "<p>In dieser Aufgabe werden Sie eine Reihe von Ziffern hören (1-9).</p>" +
      "<p>Bitte merken Sie sich die Zahlenreihe und wiederholen Sie diese mit der Tastatur, sobald Sie dazu aufgefordert werden.</p>" +
      // "<p>In diesem Aufgabe hören Sie eine Reihe von Ziffern, von 1 bis 9, und werden aufgefordert, " +
      // "sich die Sequenz zu merken und sie über die Tastatur zu wiederholen, wenn Sie dazu aufgefordert werden.</p>",
      // In a first part you will be asked to report the numbers in the order in which you heard them,
      // while in a second part you will be asked to report them in the reverse order compared to the presentation.
      // Please click on “Continue” to start with the first part.
      // "<p>In einem ersten Teil werden Sie aufgefordert, die Nummern in der Reihenfolge zu melden, " +
      // "in der Sie sie gehört haben, während Sie in einem zweiten Teil aufgefordert werden, " +
      // "sie in umgekehrter Reihenfolge zu melden, verglichen mit der Darstellung.</p>" +
      "<p>Bitte klicken Sie auf «Fortfahren», um mit dem ersten Teil zu beginnen.</p>"
    ],
    show_clickable_nav: true,
    button_label_previous: "Zurück",
    button_label_next: "Fortfahren",
    on_finish: function() {
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
  }

  var next_list = 0;
  var do_2nd_pres = 0;

  var stimDir_FWDS = "../../stimuli/digitSpan/FWDS/";

  var instructions_FWDS = {
    data: {screen_id: "instructions_FWDS"},
    type: 'html-button-response',
    // In this first part, your task is to report the sequence of numbers in the order of presentation
    // (i.e., starting with the first number and ending with the last number you heard) with no spaces or other symbols between the digits.
    // For example, if you've heard the sequence" One Two Three "your answer should be «123».
    stimulus: "<p>Beginnen Sie nun, die Zahlen in der richtigen Reihenfolge wiederzugeben.</p>" +
    "<p>Beispiel: “eins zwei drei” = “123”.</p>" +
    "<p>Verwenden Sie keine Leerzeichen oder andere Symbole.</p>",
    // "<p>In diesem ersten Teil besteht Ihre Aufgabe darin, die Reihenfolge der Zahlen in der Reihenfolge der Präsentation anzugeben " +
    // "(i.e., beginnend mit der ersten Nummer und endend mit der letzten Nummer, die Sie gehört haben) ohne Leerzeichen oder andere Symbole zwischen den Ziffern.</p>" +
    // "<p>Wenn Sie beispielsweise die Sequenz «Eins Zwei Drei» gehört haben, sollte Ihre Antwort «123» sein.</p>",
    choices: ['Aufgabe starten'],
    on_finish: function() {
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
  }

  var trial1_FWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 1: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "6439", odd_even: "odd"},
    stimulus: stimDir_FWDS + "originalFWDS_list1.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial1_FWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // data.list_count = 0;
        // data.next_list = 0;
        // console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 1: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "6439", odd_even: "odd"},
    type: 'survey-text',
    questions: [
      // {prompt: 'Enter the sequence of numbers in the order of presentation',  columns: 12}
      {prompt: 'Geben Sie die Zahlenfolge in der Reihenfolge der Präsentation ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10];
      // },
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        next_list = 1;
        // data.next_list = 1;
        do_2nd_pres = 0;
        // data.do_2nd_pres = 0;
      } else {
        data.accuracy = 0;
        do_2nd_pres = 1;
        // data.do_2nd_pres = 1;
        next_list = 0;
      }
    }
  }

  var FWDS_trial_1 = {
    timeline: [instructions_FWDS, trial1_FWDS_audio, trial1_FWDS_resp]
  }


  var trial2_FWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 2: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "7286", odd_even: "even"},
    stimulus: stimDir_FWDS + "originalFWDS_list2.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial2_FWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 2: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:4, speaker:35, correct_response: "7286", odd_even: "even"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlenfolge in der Reihenfolge der Präsentation ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10];
      // }
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        next_list = 1;
        do_2nd_pres = 0;
        // data.next_list = 1;
      } else {
        data.accuracy = 0;
        do_2nd_pres = 0;
        next_list = 0;
      }
    }
  }

  var FWDS_trial_2 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(do_2nd_pres == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial2_FWDS_audio, trial2_FWDS_resp]
  }


  var trial3_FWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 3: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:5, speaker:35, correct_response: "42731", odd_even: "odd"},
    stimulus: stimDir_FWDS + "originalFWDS_list3.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial3_FWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        list_count = 0;
        next_list = 0;
        // console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 3: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:5, speaker:35, correct_response: "42731", odd_even: "odd"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlenfolge in der Reihenfolge der Präsentation ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10] +
        jsPsych.data.getLastTrialData().values()[0].responses[11];
      // },
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        next_list = 1;
        // data.next_list = 1;
        do_2nd_pres = 0;
        // data.do_2nd_pres = 0;
      } else {
        data.accuracy = 0;
        do_2nd_pres = 1;
        // data.do_2nd_pres = 1;
        next_list = 0;
      }
    }
  }

  var FWDS_trial_3 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(next_list == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial3_FWDS_audio, trial3_FWDS_resp]
  }


  var trial4_FWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 4: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 4: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:5, speaker:35, correct_response: "75836", odd_even: "even"},
    stimulus: stimDir_FWDS + "originalFWDS_list4.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial4_FWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // data.list_count = 0;
        // data.next_list = 0;
        // console.log("TRIAL 4: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 4: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:5, speaker:35, correct_response: "75836", odd_even: "even"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlenfolge in der Reihenfolge der Präsentation ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10] +
        jsPsych.data.getLastTrialData().values()[0].responses[11];
      // }
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        do_2nd_pres = 0;
        next_list = 1;
        // data.next_list = 1;
      } else {
        data.accuracy = 0;
        next_list = 0;
        do_2nd_pres = 0;
      }
    }
  }

  var FWDS_trial_4 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(do_2nd_pres == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial4_FWDS_audio, trial4_FWDS_resp]
  }


  var trial5_FWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 5: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 5: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:6, speaker:35, correct_response: "619473", odd_even: "odd"},
    stimulus: stimDir_FWDS + "originalFWDS_list5.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial5_FWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // data.list_count = 0;
        // data.next_list = 0;
        // console.log("TRIAL 5: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 5: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:6, speaker:35, correct_response: "619473", odd_even: "odd"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlenfolge in der Reihenfolge der Präsentation ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10] +
        jsPsych.data.getLastTrialData().values()[0].responses[11] +
        jsPsych.data.getLastTrialData().values()[0].responses[12];
      // },
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        next_list = 1;
        // data.next_list = 1;
        do_2nd_pres = 0;
        // data.do_2nd_pres = 0;
      } else {
        data.accuracy = 0;
        do_2nd_pres = 1;
        // data.do_2nd_pres = 1;
        next_list = 0;
      }
    }
  }

  var FWDS_trial_5 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(next_list == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial5_FWDS_audio, trial5_FWDS_resp]
  }


  var trial6_FWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 6: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 6: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:6, speaker:35, correct_response: "392486", odd_even: "even"},
    stimulus: stimDir_FWDS + "originalFWDS_list6.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial6_FWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // console.log("TRIAL 6: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 6: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:6, speaker:35, correct_response: "392486", odd_even: "even"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlenfolge in der Reihenfolge der Präsentation ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10] +
        jsPsych.data.getLastTrialData().values()[0].responses[11] +
        jsPsych.data.getLastTrialData().values()[0].responses[12];
      // }
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        next_list = 1;
        do_2nd_pres = 0;
        // data.next_list = 1;
      } else {
        data.accuracy = 0;
        next_list = 0;
        do_2nd_pres = 0;
      }
    }
  }

  var FWDS_trial_6 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(do_2nd_pres == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial6_FWDS_audio, trial6_FWDS_resp]
  }


  var trial7_FWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 7: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 7: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:7, speaker:35, correct_response: "5917423", odd_even: "odd"},
    stimulus: stimDir_FWDS + "originalFWDS_list7.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial7_FWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // list_count = 0;
        next_list = 0;
        // console.log("TRIAL 7: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 7: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:7, speaker:35, correct_response: "5917423", odd_even: "odd"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlenfolge in der Reihenfolge der Präsentation ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10] +
        jsPsych.data.getLastTrialData().values()[0].responses[11] +
        jsPsych.data.getLastTrialData().values()[0].responses[12] +
        jsPsych.data.getLastTrialData().values()[0].responses[13];
      // },
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        next_list = 1;
        // data.next_list = 1;
        do_2nd_pres = 0;
        // data.do_2nd_pres = 0;
      } else {
        data.accuracy = 0;
        do_2nd_pres = 1;
        // data.do_2nd_pres = 1;
        next_list = 0;
      }
    }
  }

  var FWDS_trial_7 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(next_list == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial7_FWDS_audio, trial7_FWDS_resp]
  }


  var trial8_FWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 8: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 8: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data:  {screen_id: "audio_out", nr_items:7, speaker:35, correct_response: "4179386", odd_even: "even"},
    stimulus: stimDir_FWDS + "originalFWDS_list8.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial8_FWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // data.list_count = 0;
        // data.next_list = 0;
        // console.log("TRIAL 8: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 8: next list? " + next_list)
    },
    data:  {screen_id: "audio_out", nr_items:7, speaker:35, correct_response: "4179386", odd_even: "even"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlenfolge in der Reihenfolge der Präsentation ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10] +
        jsPsych.data.getLastTrialData().values()[0].responses[11] +
        jsPsych.data.getLastTrialData().values()[0].responses[12] +
        jsPsych.data.getLastTrialData().values()[0].responses[13];
      // }
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        next_list = 1;
        // data.next_list = 1;
      } else {
        data.accuracy = 0;
        next_list = 0;
        do_2nd_pres = 0;
      }
    }
  }

  var FWDS_trial_8 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(do_2nd_pres == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial8_FWDS_audio, trial8_FWDS_resp]
  }


  var trial9_FWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 9: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 9: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:8, speaker:35, correct_response: "58192647", odd_even: "odd"},
    stimulus: stimDir_FWDS + "originalFWDS_list9.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial9_FWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // list_count = 0;
        next_list = 0;
        // console.log("TRIAL 9: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 9: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:8, speaker:35, correct_response: "58192647", odd_even: "odd"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlenfolge in der Reihenfolge der Präsentation ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10] +
        jsPsych.data.getLastTrialData().values()[0].responses[11] +
        jsPsych.data.getLastTrialData().values()[0].responses[12] +
        jsPsych.data.getLastTrialData().values()[0].responses[13] +
        jsPsych.data.getLastTrialData().values()[0].responses[14];
      // },
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        next_list = 1;
        // data.next_list = 1;
        do_2nd_pres = 0;
        // data.do_2nd_pres = 0;
      } else {
        data.accuracy = 0;
        do_2nd_pres = 1;
        // data.do_2nd_pres = 1;
        next_list = 0;
      }
    }
  }

  var FWDS_trial_9 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(next_list == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial9_FWDS_audio, trial9_FWDS_resp]
  }


  var trial10_FWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 10: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 10: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:8, speaker:35, correct_response: "38295174", odd_even: "even"},
    stimulus: stimDir_FWDS + "originalFWDS_list10.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial10_FWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // data.list_count = 0;
        // data.next_list = 0;
        // console.log("TRIAL 10: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 10: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:8, speaker:35, correct_response: "38295174", odd_even: "even"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlenfolge in der Reihenfolge der Präsentation ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10] +
        jsPsych.data.getLastTrialData().values()[0].responses[11] +
        jsPsych.data.getLastTrialData().values()[0].responses[12] +
        jsPsych.data.getLastTrialData().values()[0].responses[13] +
        jsPsych.data.getLastTrialData().values()[0].responses[14];
      // }
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        do_2nd_pres = 0;
        next_list = 1;
        // data.next_list = 1;
      } else {
        data.accuracy = 0;
        next_list = 0;
        do_2nd_pres = 0;
      }
    }
  }

  var FWDS_trial_10 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(do_2nd_pres == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial10_FWDS_audio, trial10_FWDS_resp]
  }

/////// PUSH FWDS TRIALS TO SiNRT TIMELINE ///////////
  FWDS_timeline.timeline.push(instructions_DS);
  FWDS_timeline.timeline.push(FWDS_trial_1);
  FWDS_timeline.timeline.push(FWDS_trial_2);
  FWDS_timeline.timeline.push(FWDS_trial_3);
  FWDS_timeline.timeline.push(FWDS_trial_4);
  FWDS_timeline.timeline.push(FWDS_trial_5);
  FWDS_timeline.timeline.push(FWDS_trial_6);
  FWDS_timeline.timeline.push(FWDS_trial_7);
  FWDS_timeline.timeline.push(FWDS_trial_8);
  FWDS_timeline.timeline.push(FWDS_trial_9);
  FWDS_timeline.timeline.push(FWDS_trial_10);
  // timeline.push(FWDS_timeline);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// BWDS ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
next_list = 0;
do_2nd_pres = 0;

var stimDir_BWDS = "../../stimuli/digitSpan/BWDS/";

var instructions_BWDS = {
  data: {screen_id: "instructions_BWDS"},
  type: 'html-button-response',
  // This part is complete, thank you!
  // In the next part, your task is to indicate the sequence of numbers in the reversed order compared to presentation
  // (i.e., starting with the last number and ending with the first number you heard) with no spaces or other symbols between the digits.
  // For example, if you've heard the sequence" One Two Three "your answer should be" 321 ".
  stimulus: "<p>Vielen Dank, dieser Teil ist nun abgeschlossen.</p>" +
  "<p> </p>" +
  "<p> </p>" +
  "<p>Nun bitten wir Sie, die Zahlen in umgekehrter Reihenfolge wiederzugeben.</p>" +
  "<p>Beispiel: „eins zwei drei“ = „321“.</p>" +
  "<p>Verwenden Sie keine Leerzeichen oder andere Symbole.</p>",
  // "<p>Dieser Teil ist abgeschlossen, danke!</p>" +
  // "<p> </p>" +
  // "<p> </p>" +
  // "<p>Im nächsten Teil besteht Ihre Aufgabe darin, die Reihenfolge der Zahlen in der Reihenfolge der <b>umgekehrten</b> Darstellung anzugeben " +
  // "(i.e., beginnend mit der letzten Nummer und endend mit der ersten Nummer, die Sie gehört haben) ohne Leerzeichen oder andere Symbole zwischen den Ziffern.</p>" +
  // "<p>Wenn Sie beispielsweise die Sequenz «Eins Zwei Drei» gehört haben, sollte Ihre Antwort «321» sein.</p>",
  choices: ['Teil starten'],
  on_start: function() {
    var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(curr_progress_bar_value + (5/n_trials));
  },
  on_finish: function() {
    var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
  }
}

// ADDED 2020/12/21
var BWDS_instructions_check = {
  type: 'html-button-response',
  stimulus: "<p>Um sicher zu gehen, dass Sie die Instruktionen verstanden haben, " +
  "geben Sie nun bitte an, in welcher Reihenfolge Sie die Zahlen wiedergeben sollen:</p>",
  // "<p><b><i>Instructions understanding check:</i></b></p>" +
  // "<p>In which order should you report the series of digits?</p>",
  choices: ["vom ersten bis zum letzten","vom letzten zum ersten"],
  // choices: ['from the first presented to the last','from the last presented to the first'],
  on_finish: function() {
    var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
  }
};

var BWDS_check_answer = {
  type: 'html-keyboard-response',
  stimulus: "<p><b>korrekte Antwort: <i>vom letzten zum ersten</i></b></p>",
  // stimulus: "<p><b>Correct response: <i>from the last presented to the first</i></b></p>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 3000, //jsPsych.timelineVariable("shuffled_ITIs_SiN"),
  data: {screen_id: "ITI_wordRec"},
};

var trial1_BWDS_audio = {
  // on_start: function() {
  //     console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
  //     console.log("TRIAL 1: next list? " + next_list)
  // },
  type: 'audio-keyboard-response-simple',
  data: {screen_id: "audio_out", nr_items:3, speaker:35, input: "263", correct_response: "362", odd_even: "odd"},
  stimulus: stimDir_BWDS + "originalBWDS_list1.wav",
  prompt: "<div style='font-size: 60px'><b>+</b></div>",
  trial_ends_after_audio: true
};

var trial1_BWDS_resp = {
  on_start: function(data) {
    data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
      // data.list_count = 0;
      // data.next_list = 0;
      // console.log("TRIAL 1: do_2nd_pres? " + do_2nd_pres)
      // console.log("TRIAL 1: next list? " + next_list)
  },
  data: {screen_id: "audio_out", nr_items:3, speaker:35, input: "263", correct_response: "362", odd_even: "odd"},
  type: 'survey-text',
  questions: [
    // enter the numbers in the reversed order as compared to presentation.
    {prompt: 'Geben Sie die Zahlen <b>in umgekehrter Reihenfolge</b> wie bei der Darstellung ein.',  columns: 12}
  ],
  button_label: 'Antwort eingeben',
  on_finish: function(data){
      data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
      jsPsych.data.getLastTrialData().values()[0].responses[8] +
      jsPsych.data.getLastTrialData().values()[0].responses[9];
    // },
    if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
      data.accuracy = 1;
      // list_count += 1;
      // data.list_count += 1;
      next_list = 1;
      // data.next_list = 1;
      do_2nd_pres = 0;
      // data.do_2nd_pres = 0;
    } else {
      data.accuracy = 0;
      do_2nd_pres = 1;
      // data.do_2nd_pres = 1;
      next_list = 0;
    }
  }
}

var BWDS_trial_1 = {
  timeline: [trial1_BWDS_audio, trial1_BWDS_resp]
};

var trial2_BWDS_audio = {
  // on_start: function() {
  //     console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
  //     console.log("TRIAL 2: next list? " + next_list)
  // },
  type: 'audio-keyboard-response-simple',
  data: {screen_id: "audio_out", nr_items:3, speaker:35, input:"415", correct_response: "514", odd_even: "even"},
  stimulus: stimDir_BWDS + "originalBWDS_list2.wav",
  prompt: "<div style='font-size: 60px'><b>+</b></div>",
  trial_ends_after_audio: true
};

var trial2_BWDS_resp = {
  on_start: function(data) {
    data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
      // console.log("TRIAL 2: do_2nd_pres? " + do_2nd_pres)
      // console.log("TRIAL 2: next list? " + next_list)
  },
  data: {screen_id: "audio_out", nr_items:3, speaker:35, input:"415", correct_response: "514", odd_even: "even"},
  type: 'survey-text',
  questions: [
    {prompt: 'Geben Sie die Zahlen <b>in umgekehrter Reihenfolge</b> wie bei der Darstellung ein.',  columns: 12}
  ],
  button_label: 'Antwort eingeben',
  on_finish: function(data){
      data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
      jsPsych.data.getLastTrialData().values()[0].responses[8] +
      jsPsych.data.getLastTrialData().values()[0].responses[9];
    // }
    if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
      data.accuracy = 1;
      // list_count += 1;
      // data.list_count += 1;
      next_list = 1;
      do_2nd_pres = 0;
      // data.next_list = 1;
    } else {
      data.accuracy = 0;
      do_2nd_pres = 0;
      next_list = 0;
    }
  }
}

var BWDS_trial_2 = {
  chunk_type: 'if',
  conditional_function: function() {
    if(do_2nd_pres == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [trial2_BWDS_audio, trial2_BWDS_resp]
}


var trial3_BWDS_audio = {
  // on_start: function() {
  //     console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
  //     console.log("TRIAL 3: next list? " + next_list)
  // },
  type: 'audio-keyboard-response-simple',
  data: {screen_id: "audio_out", nr_items:4, speaker:35, input:"3279", correct_response: "9723", odd_even: "odd"},
  stimulus: stimDir_BWDS + "originalBWDS_list3.wav",
  prompt: "<div style='font-size: 60px'><b>+</b></div>",
  trial_ends_after_audio: true
};

var trial3_BWDS_resp = {
  on_start: function(data) {
    data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
      // list_count = 0;
      next_list = 0;
      // console.log("TRIAL 3: do_2nd_pres? " + do_2nd_pres)
      // console.log("TRIAL 3: next list? " + next_list)
  },
  data: {screen_id: "audio_out", nr_items:4, speaker:35, input:"3279", correct_response: "9723", odd_even: "odd"},
  type: 'survey-text',
  questions: [
    {prompt: 'Geben Sie die Zahlen <b>in umgekehrter Reihenfolge</b> wie bei der Darstellung ein.',  columns: 12}
  ],
  button_label: 'Antwort eingeben',
  on_finish: function(data){
      data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
      jsPsych.data.getLastTrialData().values()[0].responses[8] +
      jsPsych.data.getLastTrialData().values()[0].responses[9] +
      jsPsych.data.getLastTrialData().values()[0].responses[10];
    // },
    if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
      data.accuracy = 1;
      // list_count += 1;
      // data.list_count += 1;
      next_list = 1;
      // data.next_list = 1;
      do_2nd_pres = 0;
      // data.do_2nd_pres = 0;
    } else {
      data.accuracy = 0;
      do_2nd_pres = 1;
      // data.do_2nd_pres = 1;
      next_list = 0;
    }
  }
}

var BWDS_trial_3 = {
  chunk_type: 'if',
  conditional_function: function() {
    if(next_list == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [trial3_BWDS_audio, trial3_BWDS_resp]
}


var trial4_BWDS_audio = {
  // on_start: function() {
  //     console.log("TRIAL 4: do_2nd_pres? " + do_2nd_pres)
  //     console.log("TRIAL 4: next list? " + next_list)
  // },
  type: 'audio-keyboard-response-simple',
  data: {screen_id: "audio_out", nr_items:4, speaker:35, input:"4968", correct_response: "8694", odd_even: "even"},
  stimulus: stimDir_BWDS + "originalBWDS_list4.wav",
  prompt: "<div style='font-size: 60px'><b>+</b></div>",
  trial_ends_after_audio: true
};

var trial4_BWDS_resp = {
  on_start: function(data) {
    data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
      // data.list_count = 0;
      // data.next_list = 0;
      // console.log("TRIAL 4: do_2nd_pres? " + do_2nd_pres)
      // console.log("TRIAL 4: next list? " + next_list)
  },
  data: {screen_id: "audio_out", nr_items:4, speaker:35, input:"4968", correct_response: "8694", odd_even: "even"},
  type: 'survey-text',
  questions: [
    {prompt: 'Geben Sie die Zahlen <b>in umgekehrter Reihenfolge</b> wie bei der Darstellung ein.',  columns: 12}
  ],
  button_label: 'Antwort eingeben',
  on_finish: function(data){
      data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
      jsPsych.data.getLastTrialData().values()[0].responses[8] +
      jsPsych.data.getLastTrialData().values()[0].responses[9] +
      jsPsych.data.getLastTrialData().values()[0].responses[10];
    // }
    if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
      data.accuracy = 1;
      // list_count += 1;
      // data.list_count += 1;
      do_2nd_pres = 0;
      next_list = 1;
      // data.next_list = 1;
    } else {
      data.accuracy = 0;
      next_list = 0;
      do_2nd_pres = 0;
    }
  }
}

var BWDS_trial_4 = {
  chunk_type: 'if',
  conditional_function: function() {
    if(do_2nd_pres == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [trial4_BWDS_audio, trial4_BWDS_resp]
}


var trial5_BWDS_audio = {
  // on_start: function() {
  //     console.log("TRIAL 5: do_2nd_pres? " + do_2nd_pres)
  //     console.log("TRIAL 5: next list? " + next_list)
  // },
  type: 'audio-keyboard-response-simple',
  data: {screen_id: "audio_out", nr_items:5, speaker:35, input:"15286", correct_response: "68251", odd_even: "odd"},
  stimulus: stimDir_BWDS + "originalBWDS_list5.wav",
  prompt: "<div style='font-size: 60px'><b>+</b></div>",
  trial_ends_after_audio: true
};

var trial5_BWDS_resp = {
  on_start: function(data) {
    data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
      // data.list_count = 0;
      // data.next_list = 0;
      // console.log("TRIAL 5: do_2nd_pres? " + do_2nd_pres)
      // console.log("TRIAL 5: next list? " + next_list)
  },
  data: {screen_id: "audio_out", nr_items:5, speaker:35, input:"15286", correct_response: "68251", odd_even: "odd"},
  type: 'survey-text',
  questions: [
    {prompt: 'Geben Sie die Zahlen <b>in umgekehrter Reihenfolge</b> wie bei der Darstellung ein.',  columns: 12}
  ],
  button_label: 'Antwort eingeben',
  on_finish: function(data){
      data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
      jsPsych.data.getLastTrialData().values()[0].responses[8] +
      jsPsych.data.getLastTrialData().values()[0].responses[9] +
      jsPsych.data.getLastTrialData().values()[0].responses[10] +
      jsPsych.data.getLastTrialData().values()[0].responses[11];
    // },
    if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
      data.accuracy = 1;
      // list_count += 1;
      // data.list_count += 1;
      next_list = 1;
      // data.next_list = 1;
      do_2nd_pres = 0;
      // data.do_2nd_pres = 0;
    } else {
      data.accuracy = 0;
      do_2nd_pres = 1;
      // data.do_2nd_pres = 1;
      next_list = 0;
    }
  }
}

var BWDS_trial_5 = {
  chunk_type: 'if',
  conditional_function: function() {
    if(next_list == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [trial5_BWDS_audio, trial5_BWDS_resp]
}


var trial6_BWDS_audio = {
  // on_start: function() {
  //     console.log("TRIAL 6: do_2nd_pres? " + do_2nd_pres)
  //     console.log("TRIAL 6: next list? " + next_list)
  // },
  type: 'audio-keyboard-response-simple',
  data: {screen_id: "audio_out", nr_items:5, speaker:35, input:"61843", correct_response: "34816", odd_even: "even"},
  stimulus: stimDir_BWDS + "originalBWDS_list6.wav",
  prompt: "<div style='font-size: 60px'><b>+</b></div>",
  trial_ends_after_audio: true
};

var trial6_BWDS_resp = {
  on_start: function(data) {
    data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
      // console.log("TRIAL 6: do_2nd_pres? " + do_2nd_pres)
      // console.log("TRIAL 6: next list? " + next_list)
  },
  data: {screen_id: "audio_out", nr_items:5, speaker:35, input:"61843", correct_response: "34816", odd_even: "even"},
  type: 'survey-text',
  questions: [
    {prompt: 'Geben Sie die Zahlen <b>in umgekehrter Reihenfolge</b> wie bei der Darstellung ein.',  columns: 12}
  ],
  button_label: 'Antwort eingeben',
  on_finish: function(data){
      data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
      jsPsych.data.getLastTrialData().values()[0].responses[8] +
      jsPsych.data.getLastTrialData().values()[0].responses[9] +
      jsPsych.data.getLastTrialData().values()[0].responses[10] +
      jsPsych.data.getLastTrialData().values()[0].responses[11];
    // }
    if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
      data.accuracy = 1;
      // list_count += 1;
      // data.list_count += 1;
      next_list = 1;
      do_2nd_pres = 0;
      // data.next_list = 1;
    } else {
      data.accuracy = 0;
      next_list = 0;
      do_2nd_pres = 0;
    }
  }
}

var BWDS_trial_6 = {
  chunk_type: 'if',
  conditional_function: function() {
    if(do_2nd_pres == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [trial6_BWDS_audio, trial6_BWDS_resp]
}


var trial7_BWDS_audio = {
  // on_start: function() {
  //     console.log("TRIAL 7: do_2nd_pres? " + do_2nd_pres)
  //     console.log("TRIAL 7: next list? " + next_list)
  // },
  type: 'audio-keyboard-response-simple',
  data: {screen_id: "audio_out", nr_items:6, speaker:35, input:"539418", correct_response: "814935", odd_even: "odd"},
  stimulus: stimDir_BWDS + "originalBWDS_list7.wav",
  prompt: "<div style='font-size: 60px'><b>+</b></div>",
  trial_ends_after_audio: true
};

var trial7_BWDS_resp = {
  on_start: function(data) {
    data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
      // list_count = 0;
      next_list = 0;
      // console.log("TRIAL 7: do_2nd_pres? " + do_2nd_pres)
      // console.log("TRIAL 7: next list? " + next_list)
  },
  data: {screen_id: "audio_out", nr_items:6, speaker:35, input:"539418", correct_response: "814935", odd_even: "odd"},
  type: 'survey-text',
  questions: [
    {prompt: 'Geben Sie die Zahlen <b>in umgekehrter Reihenfolge</b> wie bei der Darstellung ein.',  columns: 12}
  ],
  button_label: 'Antwort eingeben',
  on_finish: function(data){
      data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
      jsPsych.data.getLastTrialData().values()[0].responses[8] +
      jsPsych.data.getLastTrialData().values()[0].responses[9] +
      jsPsych.data.getLastTrialData().values()[0].responses[10] +
      jsPsych.data.getLastTrialData().values()[0].responses[11] +
      jsPsych.data.getLastTrialData().values()[0].responses[12];
    // },
    if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
      data.accuracy = 1;
      // list_count += 1;
      // data.list_count += 1;
      next_list = 1;
      // data.next_list = 1;
      do_2nd_pres = 0;
      // data.do_2nd_pres = 0;
    } else {
      data.accuracy = 0;
      do_2nd_pres = 1;
      // data.do_2nd_pres = 1;
      next_list = 0;
    }
  }
}

var BWDS_trial_7 = {
  chunk_type: 'if',
  conditional_function: function() {
    if(next_list == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [trial7_BWDS_audio, trial7_BWDS_resp]
}


var trial8_BWDS_audio = {
  // on_start: function() {
  //     console.log("TRIAL 8: do_2nd_pres? " + do_2nd_pres)
  //     console.log("TRIAL 8: next list? " + next_list)
  // },
  type: 'audio-keyboard-response-simple',
  data:  {screen_id: "audio_out", nr_items:6, speaker:35, input:"724856", correct_response: "658427", odd_even: "even"},
  stimulus: stimDir_BWDS + "originalBWDS_list8.wav",
  prompt: "<div style='font-size: 60px'><b>+</b></div>",
  trial_ends_after_audio: true
};

var trial8_BWDS_resp = {
  on_start: function(data) {
    data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
      // data.list_count = 0;
      // data.next_list = 0;
      // console.log("TRIAL 8: do_2nd_pres? " + do_2nd_pres)
      // console.log("TRIAL 8: next list? " + next_list)
  },
  data:  {screen_id: "audio_out", nr_items:6, speaker:35, input:"724856", correct_response: "658427", odd_even: "even"},
  type: 'survey-text',
  questions: [
    {prompt: 'Geben Sie die Zahlen <b>in umgekehrter Reihenfolge</b> wie bei der Darstellung ein.',  columns: 12}
  ],
  button_label: 'Antwort eingeben',
  on_finish: function(data){
      data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
      jsPsych.data.getLastTrialData().values()[0].responses[8] +
      jsPsych.data.getLastTrialData().values()[0].responses[9] +
      jsPsych.data.getLastTrialData().values()[0].responses[10] +
      jsPsych.data.getLastTrialData().values()[0].responses[11] +
      jsPsych.data.getLastTrialData().values()[0].responses[12];
    // }
    if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
      data.accuracy = 1;
      // list_count += 1;
      // data.list_count += 1;
      next_list = 1;
      // data.next_list = 1;
    } else {
      data.accuracy = 0;
      next_list = 0;
      do_2nd_pres = 0;
    }
  }
}

var BWDS_trial_8 = {
  chunk_type: 'if',
  conditional_function: function() {
    if(do_2nd_pres == 0) {
      return false;
    } else {
      return true;
    }
  },
  timeline: [trial8_BWDS_audio, trial8_BWDS_resp]
}


  var trial9_BWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 9: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 9: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:7, speaker:35, input:"3129365", correct_response: "5639213", odd_even: "odd"},
    stimulus: stimDir_BWDS + "originalBWDS_list9.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial9_BWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // list_count = 0;
        next_list = 0;
        // console.log("TRIAL 9: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 9: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:7, speaker:35, input:"3129365", correct_response: "5639213", odd_even: "odd"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlen <b>in umgekehrter Reihenfolge</b> wie bei der Darstellung ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10] +
        jsPsych.data.getLastTrialData().values()[0].responses[11] +
        jsPsych.data.getLastTrialData().values()[0].responses[12] +
        jsPsych.data.getLastTrialData().values()[0].responses[13];
      // },
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        next_list = 1;
        // data.next_list = 1;
        do_2nd_pres = 0;
        // data.do_2nd_pres = 0;
      } else {
        data.accuracy = 0;
        do_2nd_pres = 1;
        // data.do_2nd_pres = 1;
        next_list = 0;
      }
    }
  }

  var BWDS_trial_9 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(next_list == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial9_BWDS_audio, trial9_BWDS_resp]
  }


  var trial10_BWDS_audio = {
    // on_start: function() {
    //     console.log("TRIAL 10: do_2nd_pres? " + do_2nd_pres)
    //     console.log("TRIAL 10: next list? " + next_list)
    // },
    type: 'audio-keyboard-response-simple',
    data: {screen_id: "audio_out", nr_items:7, speaker:35, input:"4739128", correct_response: "8219374", odd_even: "even"},
    stimulus: stimDir_BWDS + "originalBWDS_list10.wav",
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    trial_ends_after_audio: true
  };

  var trial10_BWDS_resp = {
    on_start: function(data) {
      data.correct_response = jsPsych.data.getLastTrialData().values()[0].correct_response;
        // data.list_count = 0;
        // data.next_list = 0;
        // console.log("TRIAL 10: do_2nd_pres? " + do_2nd_pres)
        // console.log("TRIAL 10: next list? " + next_list)
    },
    data: {screen_id: "audio_out", nr_items:7, speaker:35, input:"4739128", correct_response: "8219374", odd_even: "even"},
    type: 'survey-text',
    questions: [
      {prompt: 'Geben Sie die Zahlen <b>in umgekehrter Reihenfolge</b> wie bei der Darstellung ein.',  columns: 12}
    ],
    button_label: 'Antwort eingeben',
    on_finish: function(data){
        data.response_given = jsPsych.data.getLastTrialData().values()[0].responses[7] +
        jsPsych.data.getLastTrialData().values()[0].responses[8] +
        jsPsych.data.getLastTrialData().values()[0].responses[9] +
        jsPsych.data.getLastTrialData().values()[0].responses[10] +
        jsPsych.data.getLastTrialData().values()[0].responses[11] +
        jsPsych.data.getLastTrialData().values()[0].responses[12] +
        jsPsych.data.getLastTrialData().values()[0].responses[13];
      // }
      if (jsPsych.data.getLastTrialData().values()[0].correct_response == data.response_given){
        data.accuracy = 1;
        // list_count += 1;
        // data.list_count += 1;
        do_2nd_pres = 0;
        next_list = 1;
        // data.next_list = 1;
      } else {
        data.accuracy = 0;
        next_list = 0;
        do_2nd_pres = 0;
      }
    }
  }

  var BWDS_trial_10 = {
    chunk_type: 'if',
    conditional_function: function() {
      if(do_2nd_pres == 0) {
        return false;
      } else {
        return true;
      }
    },
    timeline: [trial10_BWDS_audio, trial10_BWDS_resp]
  }

/////// PUSH BWDS TRIALS TO ITS TIMELINE ///////////
  BWDS_timeline.timeline.push(instructions_BWDS);
  BWDS_timeline.timeline.push(BWDS_instructions_check);
  BWDS_timeline.timeline.push(BWDS_check_answer);
  BWDS_timeline.timeline.push(BWDS_trial_1);
  BWDS_timeline.timeline.push(BWDS_trial_2);
  BWDS_timeline.timeline.push(BWDS_trial_3);
  BWDS_timeline.timeline.push(BWDS_trial_4);
  BWDS_timeline.timeline.push(BWDS_trial_5);
  BWDS_timeline.timeline.push(BWDS_trial_6);
  BWDS_timeline.timeline.push(BWDS_trial_7);
  BWDS_timeline.timeline.push(BWDS_trial_8);
  BWDS_timeline.timeline.push(BWDS_trial_9);
  BWDS_timeline.timeline.push(BWDS_trial_10);
  // timeline.push(BWDS_timeline);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////////// Word Rec ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var ITI_wordRec = {
  type: 'html-keyboard-response',
  stimulus: "<div style='font-size: 60px'><b>+</b></div>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000, //jsPsych.timelineVariable("shuffled_ITIs_SiN"),
  data: {screen_id: "ITI_wordRec"},
  on_start: function() {
    console.log("waiting 1 sec...")
  }
};

var keyboardIn_wordRec = {
  data: {screen_id: "keyboard_in"},
  type: 'survey-text',
  questions: [
      {prompt: 'Welches Wort wurde gesagt?',  columns: 12}
    ],
  button_label: "Antwort eingeben",
  on_finish: function(data) {
    var thisResp = jsPsych.data.getLastTrialData().values()[0].responses;
    var resp_given = thisResp.substring(7, thisResp.length - 2);
    console.log("resp given = " + resp_given);
    data.wordRec_respGiven = resp_given;
    var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
  } //,
  // on_start: function() {
  //   console.log("collecting response...")
  // }
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////// Word Rec SiN ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
  var instructions_wordRec = {
    data: {screen_id: "instructions_wordRec"},
    type: 'instructions',
    pages: [
      // Task 6/6: Word recognition (duration: 8 minutes circa)
      "<p>Aufgabe 6/6: Worterkennung</p>" +
      "<p>(Dauer: ca. 8 Minuten)</p>",
      // In this task you will hear German words that are acoustically manipulated to be difficult to understand.
      // Your task is to repeat aloud the word that you heard.
      "<p>In dieser Aufgabe werden Sie deutsche Wörter hören, welche akustisch manipuliert wurden, so dass sie schwer verständlich sind.</p>" +
      // "<p>Your task is to write the down with the keyboard the word you have heard and then kick on the ‘submit’ button (or press Enter).</p>" +
      // "<p>If you are not sure, leave the response box empty.</p>"
      "<p>Ihre Aufgabe ist es , die gehörten Wörter mit Ihrer Tastatur zu notieren und danach `Enter` zu drücken.</p>" +
      "<p>Wenn Sie sich nicht sicher sind, können Sie das Feld leer lassen.</p>"
      // "<p>Ihre Aufgabe ist es, die Wörter zu wiederholen.</p>",
      // // "<p>In diesem Aufgabe wirst du deutsche Wörter hören, die akustisch manipuliert werden, um schwer zu verstehen.</p>" +
      // // "<p>Anschliessend wiederholst du das Wort, das du verstanden hast.</p>",
      // // On every experimental trial, press the buttons «Play» to hear the word, the button «Record» to start recording and the button «Stop» to stop recording.
      // // The fixation cross indicates that a word is being played and the red «recording point» indicates that the recording is ongoing.
      //
      // "<p>Drücken Sie “Wiedergabe” um das Wort zu hören, “Aufnahme” um ihre Aufnahme zu starten und “Stop” um die Aufnahme zu stoppen " +
      // "(Sie müssen also bei jedem Durchgang insgesamt 3 mal etwas drücken).</p>" +
      // "<p>Das Fixierungskreuz zeigt Ihnen an, dass ein Wort abgespielt wird.</p>" +
      // "<p>Der rote Punkt zeigt an, dass Ihre Aufnahme läuft.</p>"
      // // "<p>Bei jedem Versuchsdurchgang sollten Sie drei Tasten drücken: «Wiedergabe», um das Wort zu hören, " +
      // // "«Record», um die Aufnahme zu starten, und «Stop», um die Aufnahme zu stoppen.</p>" +
      // // "<p>Das Fixierungskreuz zeigt an, dass ein Wort abgespielt wird und der rote «Aufnahme-Punkt» zeigt an, " +
      // // "dass die Aufnahme läuft.</p>",
      // // When you are not sure about which word was said, please try to guess.
      // // Only when you have absolutely no idea, please say «No idea».
      // // In two separate parts, two different acoustic manipulations are used.
      // // Press the button below to proceed to the first part.
      // // "<p>Wenn Sie sich nicht sicher sind, ob sie das Wort verstanden haben, raten Sie einfach.</p>" +
      // // "<p>Wenn Sie überhaupt keine Ahnung haben, sagen Sie “Keine Ahnung”.</p>" +
      // // "<p>Bitte drücken Sie “Fortfahren”, sobald sie bereit sind für den ersten Teil.</p>"
      // // "<p>Wenn du unsicher bist, versuche zu raten.</p>" +
      // // "<p>Wenn du jedoch absolut keine Ahnng hast, klicke auf die Schaltfläche «Keine Ahnung».</p>" +
      // // "<p>In zwei getrennten Teilen werden zwei verschiedene akustische Manipulationen angewendet.</p>" +
      // // "<p>Bitte klicken Sie auf «Fortfahren», um mit dem ersten Teil zu beginnen.</p>"
    ],
    show_clickable_nav: true,
    button_label_previous: "Zurück",
    button_label_next: "Fortfahren",
    on_finish: function() {
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    },
    on_start: function() {
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (5/n_trials));
    },
  };

// var instructions_wordRec_SiN = {
//   data: {screen_id: "instructions_SiNRT"},
//   type: 'html-button-response',
//   stimulus: "<p>As part of this test, you will hear some words in German" +
//   " that are difficult to unserdtand because they are embedded in noise.</p>" +
//   "<p>Your task is to repeat aloud the word heard when you are prompted to do so.</p>" +
//   "<p>The fixation cross indicates that a word is being presented and a red " +
//   " 'recording dot' indicates that you should repeat the word.</p>" +
//   "<p>When you are not sure, please try to guess.</p>" +
//   "<p>If you really have no idea about what was said, please say 'Keine Anhung'.</p>" +
//   "<p>Press 'Continue' to start the test.</p>" +
//   "<p>NOTE : the script is initialised with the `use_webaudio` parameter" +
//   "of jspsych.init set to `false` for testing on local machine; "  +
//   "remember to change for testing on server</p>",
//   choices: ['Continue'],
//   on_finish: function(data){
//           }
// };
// timeline.push(instructions_wordRec_SiN);

// var fixation_cross = {
//   data: {screen_id: "fixation"},
//   type: 'html-keyboard-response',
//   stimulus: "<div style='font-size: 60px'><b>+</b></div>",
//   choices: jsPsych.NO_KEYS,
//   trial_duration: 1000
// }

  var stimDir_SiNwords = "../../stimuli/wordRec/SiN/0dB_SNR/";

  var start_wordRecSiN = {
    data: {screen_id: "start_wordRecSiN"},
    type: 'html-button-response',
    stimulus:
    //  "<p>Wenn Sie sich nicht sicher sind, ob sie das Wort verstanden haben, raten Sie einfach.</p>" +
    // "<p>Wenn Sie überhaupt keine Ahnung haben, sagen Sie “Keine Ahnung”.</p>" +
    // "<p>Bitte drücken Sie “Fortfahren”, sobald sie bereit sind für den ersten Teil.</p>",
    "<p>In diesem Teil werden Sie aufgefordert, Worten zu identifizieren, " +
    "<b>die in Hintergrundgeräusche eingebettet sind</b>.</p>" +
    "<p> </p>" +
    // // // when recording your response wait at least one after you press "record" to spell the word
    // // // and wait at least a second after you have spoken the word before hitting "stop"'
    // // "<p><b>Während Sie Ihre Antworten aufnehmen, warten Sie bitte vor dem Sprechen eine Sekunde " +
    // // "und ebenfalls nach dem Sprechen, bevor Sie «Stop» drücken.</b></p>" +
    // // "<p> </p>"  +
    "<p>Drücken Sie die Taste unten, um das Teil zu starten.</p>",
    choices: ['Teil starten'],
    on_finish: function() {
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
  };
  // timeline.push(start_wordRecSiN);

  var stimuli_SiN = [
    {stimulus_SiN: stimDir_SiNwords + "Tankstelle.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Tankstelle"}},
    {stimulus_SiN: stimDir_SiNwords + "Kirche.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Kirche"}},
    {stimulus_SiN: stimDir_SiNwords + "Tempel.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Tempel"}},
    {stimulus_SiN: stimDir_SiNwords + "Zitrone.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Zitrone"}},
    {stimulus_SiN: stimDir_SiNwords + "Zebra.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Zebra"}},
    {stimulus_SiN: stimDir_SiNwords + "Erdbeere.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Erdbeere"}},
    {stimulus_SiN: stimDir_SiNwords + "Krippe.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Krippe"}},
    {stimulus_SiN: stimDir_SiNwords + "Ozean.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Ozean"}},
    {stimulus_SiN: stimDir_SiNwords + "Geige.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Geige"}},
    {stimulus_SiN: stimDir_SiNwords + "Kabine.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Kabine"}},
    {stimulus_SiN: stimDir_SiNwords + "Pyramide.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Pyramide"}},
    {stimulus_SiN: stimDir_SiNwords + "Kartoffel.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Kartoffel"}},
    {stimulus_SiN: stimDir_SiNwords + "Teppich.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Teppich"}},
    {stimulus_SiN: stimDir_SiNwords + "Panda.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Panda"}},
    {stimulus_SiN: stimDir_SiNwords + "Salz.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Salz"}},
    {stimulus_SiN: stimDir_SiNwords + "Tomate.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Tomate"}},
    {stimulus_SiN: stimDir_SiNwords + "Kiefer.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Kiefer"}},
    {stimulus_SiN: stimDir_SiNwords + "Sessel.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Sessel"}},
    {stimulus_SiN: stimDir_SiNwords + "Zeitung.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Zeitung"}},
    {stimulus_SiN: stimDir_SiNwords + "Pflanze.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Pflanze"}},
    {stimulus_SiN: stimDir_SiNwords + "Fisch.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Fisch"}},
    {stimulus_SiN: stimDir_SiNwords + "Handschuh.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Handschuh"}},
    {stimulus_SiN: stimDir_SiNwords + "Hotel.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Hotel"}},
    {stimulus_SiN: stimDir_SiNwords + "Dusche.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Dusche"}},
    {stimulus_SiN: stimDir_SiNwords + "Hammer.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Hammer"}},
    {stimulus_SiN: stimDir_SiNwords + "Stuhl.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Stuhl"}},
    {stimulus_SiN: stimDir_SiNwords + "Suppe.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Suppe"}},
    {stimulus_SiN: stimDir_SiNwords + "Treppe.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Treppe"}},
    {stimulus_SiN: stimDir_SiNwords + "Taube.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Taube"}},
    {stimulus_SiN: stimDir_SiNwords + "Apotheke.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Apotheke"}},
    {stimulus_SiN: stimDir_SiNwords + "Radio.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Radio"}},
    {stimulus_SiN: stimDir_SiNwords + "Flughafen.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Flughafen"}},
    {stimulus_SiN: stimDir_SiNwords + "Trommel.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Trommel"}},
    {stimulus_SiN: stimDir_SiNwords + "Kasino.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Kasino"}},
    {stimulus_SiN: stimDir_SiNwords + "Frosch.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Frosch"}},
    {stimulus_SiN: stimDir_SiNwords + "Blume.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Blume"}},
    {stimulus_SiN: stimDir_SiNwords + "Lunge.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Lunge"}},
    {stimulus_SiN: stimDir_SiNwords + "Cello.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Cello"}},
    {stimulus_SiN: stimDir_SiNwords + "Bluse.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Bluse"}},
    {stimulus_SiN: stimDir_SiNwords + "Kittel.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Kittel"}},
    {stimulus_SiN: stimDir_SiNwords + "Tasche.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Tasche"}},
    {stimulus_SiN: stimDir_SiNwords + "Flugzeug.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Flugzeug"}},
    {stimulus_SiN: stimDir_SiNwords + "Brust.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Brust"}},
    {stimulus_SiN: stimDir_SiNwords + "Luft.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Luft"}},
    {stimulus_SiN: stimDir_SiNwords + "Schule.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Schule"}},
    {stimulus_SiN: stimDir_SiNwords + "Schwein.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Schwein"}},
    {stimulus_SiN: stimDir_SiNwords + "Markt.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Markt"}},
    {stimulus_SiN: stimDir_SiNwords + "Stimme.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Stimme"}},
    {stimulus_SiN: stimDir_SiNwords + "Ring.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Ring"}},
    {stimulus_SiN: stimDir_SiNwords + "Kaffee.wav", data_SiN: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Kaffee"}}
  ];

  var audioOut_SiN = {
    type: 'audio-keyboard-response',
    data: jsPsych.timelineVariable("data_SiN"),
    stimulus: jsPsych.timelineVariable("stimulus_SiN"),
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    // response_allowed_while_playing: false,
    choices: jsPsych.NO_KEYS,
    trial_ends_after_audio: true,
    on_start: function() {
          console.log("playing audio...")
        }
  };

  var procedure_SiN = {
    timeline: [ITI_wordRec, audioOut_SiN, keyboardIn_wordRec],
    timeline_variables: stimuli_SiN,
    randomize_order: true
  };

///////////////////////////// AUDIO RESPONSES //////////////////////////////////
  // var preAudio_wordRecSiN = {
  //   data: {screen_id: "preAudio_wordRecSiN"},
  //   type: 'html-button-response',
  //   stimulus: "<p>Klicke auf «Abspielen», um das Wort zu hören.</p>",
  //   choices: ['Abspielen']
  // };
  //
  // var audioOut_SiN = {
  //   // type: 'audio-keyboard-response-simple',
  //   type: 'audio-button-response-simple',
  //   data: jsPsych.timelineVariable("data_SiN"),
  //   stimulus: jsPsych.timelineVariable("stimulus_SiN"),
  //   // trial_ends_after_audio: true
  //   choices: ['record'],
  // };
  //
  // var audioIn_list1SiN = {
  //     type: "upload-audio",
  //     // type: "download-audio",
  //     choices: ['Stop'],
  //     on_finish: function() {
  //       var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
  //       jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
  //     }
  // };
  //
  // var procedure_SiN = {
  //   timeline: [preAudio_wordRecSiN, audioOut_SiN, audioIn_list1SiN],
  //   timeline_variables: stimuli_SiN,
  //   randomize_order: true
  // };

/////// PUSH wordRec TRIALS TO ITS TIMELINE ///////////
  // wordRecSiN_timeline.timeline.push(instructions_wordRec_SiN);
  wordRecSiN_timeline.timeline.push(start_wordRecSiN);
  wordRecSiN_timeline.timeline.push(procedure_SiN);
  // timeline.push(wordRecSiN_timeline);
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
////////////////////////// Word Rec NVS ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// var instructions_wordRec_NVS = {
//   data: {screen_id: "instructions_NVSRT"},
//   type: 'html-button-response',
//   stimulus: "<p>As part of this test, you will hear some words in German" +
//   " that are difficult to unserdtand because they are embedded in noise.</p>" +
//   "<p>Your task is to repeat aloud the word heard when you are prompted to do so.</p>" +
//   "<p>The fixation cross indicates that a word is being presented and a red " +
//   " 'recording dot' indicates that you should repeat the word.</p>" +
//   "<p>When you are not sure, please try to guess.</p>" +
//   "<p>If you really have no idea about what was said, please say 'Keine Anhung'.</p>" +
//   "<p>Press 'Continue' to start the test.</p>" +
//   "<p>NOTE : the script is initialised with the `use_webaudio` parameter" +
//   "of jspsych.init set to `false` for testing on local machine; "  +
//   "remember to change for testing on server</p>",
//   choices: ['Continue'],
//   on_finish: function(data){
//           }
// };
// timeline.push(instructions_wordRec_NVS);

// var fixation_cross = {
//   data: {screen_id: "fixation"},
//   type: 'html-keyboard-response',
//   stimulus: "<div style='font-size: 60px'><b>+</b></div>",
//   choices: jsPsych.NO_KEYS,
//   trial_duration: 1000
// }

  var stimDir_NVSwords = "../../stimuli/wordRec/NVS/5chan/";

  var start_wordRecNVS = {
    data: {screen_id: "start_wordRecNVS"},
    type: 'html-button-response',
    stimulus: "<p>In diesem Teil bitten wir Sie, Wörter zu identifizieren, welche mit einem Rauschen vermischt wurden.</p>" +
    "<p> </p>"  +
    "<p>Drücken Sie die Taste unten, um das Teil zu starten.</p>",
    // "<p>In diesem Teil werden Sie aufgefordert, Worten zu identifizieren, " +
    // "<b>die mit Rauschen gemischt sind</b>.</p>" +
    // "<p> </p>" +
    // // when recording your response wait at least one after you press "record" to spell the word
    // // and wait at least a second after you have spoken the word before hitting "stop"'
    // "<p><b>Während Sie Ihre Antworten aufnehmen, warten Sie bitte vor dem Sprechen eine Sekunde " +
    // "und ebenfalls nach dem Sprechen, bevor Sie «Stop» drücken.</b></p>" +
    // "<p> </p>"  +
    // "<p>Drücken Sie die Taste unten, um das Teil zu starten.</p>",
    choices: ['Teil starten'],
    on_finish: function() {
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
  };
  // timeline.push(start_wordRecNVS);

  var stimuli_NVS = [
    {stimulus_NVS: stimDir_NVSwords + "Gitarre.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Gitarre"}},
    {stimulus_NVS: stimDir_NVSwords + "Taxi.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Taxi"}},
    {stimulus_NVS: stimDir_NVSwords + "Tunnel.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Tunnel"}},
    {stimulus_NVS: stimDir_NVSwords + "Handgelenk.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Handgelenk"}},
    {stimulus_NVS: stimDir_NVSwords + "Zwiebel.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Zwiebel"}},
    {stimulus_NVS: stimDir_NVSwords + "Sandale.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Sandale"}},
    {stimulus_NVS: stimDir_NVSwords + "Nudel.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Nudel"}},
    {stimulus_NVS: stimDir_NVSwords + "Krawatte.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Krawatte"}},
    {stimulus_NVS: stimDir_NVSwords + "Lippe.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Lippe"}},
    {stimulus_NVS: stimDir_NVSwords + "Elefant.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Elefant"}},
    {stimulus_NVS: stimDir_NVSwords + "Sonnenbrille.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Sonnenbrille"}},
    {stimulus_NVS: stimDir_NVSwords + "Gewebe.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Gewebe"}},
    {stimulus_NVS: stimDir_NVSwords + "Klavier.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Klavier"}},
    {stimulus_NVS: stimDir_NVSwords + "Ohrring.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Ohrring"}},
    {stimulus_NVS: stimDir_NVSwords + "Schmuck.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Schmuck"}},
    {stimulus_NVS: stimDir_NVSwords + "Rasierer.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Rasierer"}},
    {stimulus_NVS: stimDir_NVSwords + "Gabel.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Gabel"}},
    {stimulus_NVS: stimDir_NVSwords + "Birne.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Birne"}},
    {stimulus_NVS: stimDir_NVSwords + "Knochen.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Knochen"}},
    {stimulus_NVS: stimDir_NVSwords + "Stiefel.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Stiefel"}},
    {stimulus_NVS: stimDir_NVSwords + "Stein.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Stein"}},
    {stimulus_NVS: stimDir_NVSwords + "Beutel.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Beutel"}},
    {stimulus_NVS: stimDir_NVSwords + "Geschenk.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Geschenk"}},
    {stimulus_NVS: stimDir_NVSwords + "Papier.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Papier"}},
    {stimulus_NVS: stimDir_NVSwords + "Tiger.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Tiger"}},
    {stimulus_NVS: stimDir_NVSwords + "Brot.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Brot"}},
    {stimulus_NVS: stimDir_NVSwords + "Spiegel.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Spiegel"}},
    {stimulus_NVS: stimDir_NVSwords + "Brille.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Brille"}},
    {stimulus_NVS: stimDir_NVSwords + "Sofa.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Sofa"}},
    {stimulus_NVS: stimDir_NVSwords + "Kabinett.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Kabinett"}},
    {stimulus_NVS: stimDir_NVSwords + "Schulter.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Schulter"}},
    {stimulus_NVS: stimDir_NVSwords + "Fernsehen.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Fernsehen"}},
    {stimulus_NVS: stimDir_NVSwords + "Mixer.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Mixer"}},
    {stimulus_NVS: stimDir_NVSwords + "Tablette.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Tablette"}},
    {stimulus_NVS: stimDir_NVSwords + "Hirsch.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Hirsch"}},
    {stimulus_NVS: stimDir_NVSwords + "Lampe.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Lampe"}},
    {stimulus_NVS: stimDir_NVSwords + "Seife.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Seife"}},
    {stimulus_NVS: stimDir_NVSwords + "Panther.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Panther"}},
    {stimulus_NVS: stimDir_NVSwords + "Esel.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Esel"}},
    {stimulus_NVS: stimDir_NVSwords + "Bleistift.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Bleistift"}},
    {stimulus_NVS: stimDir_NVSwords + "Finger.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Finger"}},
    {stimulus_NVS: stimDir_NVSwords + "Gehirn.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Gehirn"}},
    {stimulus_NVS: stimDir_NVSwords + "Schwanz.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Schwanz"}},
    {stimulus_NVS: stimDir_NVSwords + "Schiff.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Schiff"}},
    {stimulus_NVS: stimDir_NVSwords + "Himmel.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Himmel"}},
    {stimulus_NVS: stimDir_NVSwords + "Hemd.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Hemd"}},
    {stimulus_NVS: stimDir_NVSwords + "Rohr.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Rohr"}},
    {stimulus_NVS: stimDir_NVSwords + "Nase.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Nase"}},
    {stimulus_NVS: stimDir_NVSwords + "Boot.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Boot"}},
    {stimulus_NVS: stimDir_NVSwords + "Katze.wav", data_NVS: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Katze"}}
  ];

  var preAudio_wordRecNVS = {
    data: {screen_id: "preAudio_wordRecNVS"},
    type: 'html-button-response',
    stimulus: "<p>Klicke auf «Abspielen», um das Wort zu hören.</p>",
    choices: ['Abspielen']
  };

  var audioOut_NVS = {
    type: 'audio-keyboard-response',
    data: jsPsych.timelineVariable("data_NVS"),
    stimulus: jsPsych.timelineVariable("stimulus_NVS"),
    prompt: "<div style='font-size: 60px'><b>+</b></div>",
    // response_allowed_while_playing: false,
    choices: jsPsych.NO_KEYS,
    trial_ends_after_audio: true,
    on_start: function() {
          console.log("playing audio...")
        }
  };

  var procedure_NVS = {
    timeline: [ITI_wordRec, audioOut_NVS, keyboardIn_wordRec],
    timeline_variables: stimuli_NVS,
    randomize_order: true
  };

///////////////////////////// AUDIO RESPONSES //////////////////////////////////
//   var audioOut_NVS = {
//     // type: 'audio-keyboard-response-simple',
//     type: 'audio-button-response-simple',
//     data: jsPsych.timelineVariable("data_NVS"),
//     stimulus: jsPsych.timelineVariable("stimulus_NVS"),
//     // trial_ends_after_audio: true
//     choices: ['record'],
//   };
//
//   var audioIn_list1NVS = {
//       type: "upload-audio",
//       // type: "download-audio",
//       choices: ['Stop'],
//       on_finish: function() {
//         var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
//         jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
//       }
//   };
//
//   var procedure_NVS = {
//     timeline: [preAudio_wordRecNVS, audioOut_NVS, audioIn_list1NVS],
//     timeline_variables: stimuli_NVS,
//     randomize_order: true
//   };
// // timeline.push(procedure_NVS);

/////// PUSH wordRec TRIALS TO ITS TIMELINE ///////////
  // wordRecNVS_timeline.timeline.push(instructions_wordRec_NVS);
  wordRecNVS_timeline.timeline.push(start_wordRecNVS);
  wordRecNVS_timeline.timeline.push(procedure_NVS);
  // timeline.push(wordRecNVS_timeline);
////////////////////////////////////////////////////////////////////////////////

////////////////////////// randomise SiN and NVS ///////////////////////////////
  // var randomizedWiNBlocks = jsPsych.randomization.shuffle([wordRecSiN_timeline, wordRecNVS_timeline]);
  var randomizedWordRecBlocks = jsPsych.randomization.shuffle([wordRecSiN_timeline, wordRecNVS_timeline]);

  wordRec_timeline.timeline = randomizedWordRecBlocks;
  // wordRec_timeline.timeline.push(randomizedWordRecBlocks);
  // wordRec_timeline.timeline = [instructions_wordRec, wordRecNVS_timeline];
  // timeline.push(wordRec_timeline);
////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////// DEMO ///////////////////////////////////////
var stimuli_wordRec_SiN_Demo = [
  {stimulus_SiN_Demo: stimDir_SiNwords + "Tankstelle.wav", data_SiN_Demo: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Tankstelle"}},
  {stimulus_SiN_Demo: stimDir_SiNwords + "Kirche.wav", data_SiN_Demo: {screen_id: audioOut_SiN, dB_SNR:0, word_id: "Kirche"}}
];

var audioOut_wordRec_SiN_Demo = {
  type: 'audio-keyboard-response',
  // type: 'audio-button-response-simple',
  data: jsPsych.timelineVariable("data_SiN_Demo"),
  stimulus: jsPsych.timelineVariable("stimulus_SiN_Demo"),
  prompt: "<div style='font-size: 60px'><b>+</b></div>",
  // response_allowed_while_playing: false,
  choices: jsPsych.NO_KEYS,
  trial_ends_after_audio: true,
  on_start: function() {
        console.log("playing audio...")
      }
};

var procedure_SiN_Demo = {
  // timeline: [preAudio_wordRec_SiN_Demo, audioOut_wordRec_SiN_Demo, audioIn_SiN_Demo],
  timeline: [ITI_wordRec, audioOut_wordRec_SiN_Demo, keyboardIn_wordRec],
  timeline_variables: stimuli_wordRec_SiN_Demo,
  randomize_order: true
};

var stimuli_wordRec_NVS_Demo = [
  {stimulus_NVS_Demo: stimDir_NVSwords + "Gitarre.wav", data_NVS_Demo: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Gitarre"}},
  {stimulus_NVS_Demo: stimDir_NVSwords + "Taxi.wav", data_NVS_Demo: {screen_id: audioOut_NVS, nrNvChan:5, word_id: "Taxi"}}
];

var audioOut_wordRec_NVS_Demo = {
  type: 'audio-keyboard-response',
  // type: 'audio-button-response-simple',
  data: jsPsych.timelineVariable("data_NVS_Demo"),
  stimulus: jsPsych.timelineVariable("stimulus_NVS_Demo"),
  // choices: ['record'],
  prompt: "<div style='font-size: 60px'><b>+</b></div>",
  // response_allowed_while_playing: false,
  choices: jsPsych.NO_KEYS,
  trial_ends_after_audio: true,
  on_start: function() {
        console.log("playing audio...")
      }
};

var procedure_NVS_Demo = {
  // timeline: [preAudio_wordRec_NVS_Demo, audioOut_wordRec_NVS_Demo, audioIn_NVS_Demo],
  timeline: [ITI_wordRec, audioOut_wordRec_NVS_Demo, keyboardIn_wordRec],
  timeline_variables: stimuli_wordRec_NVS_Demo,
  randomize_order: true
};

wordRecSiN_Demo_timeline.timeline.push(procedure_SiN_Demo);
wordRecNVS_Demo_timeline.timeline.push(procedure_NVS_Demo);
var randomizedWordRecDemo = jsPsych.randomization.shuffle([wordRecSiN_Demo_timeline, wordRecNVS_Demo_timeline]);
wordRec_Demo_timeline.timeline = randomizedWordRecDemo;



////////////////////////////////////////////////////////////////////////////////
/////////////////////////// ISSUES REPORT //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// var issues_report = {
//   data: {
//     screen_ID: "issues_report"
//   },
//   type: "survey-html-form",
//   preamble: // "The experiment is finished! Thank you for participating!
//   // Have you experienced any issue during the completion of the experiment?
//   // If so, please describe it below.
//   "<p><b>Das Experiment ist beendet!</b></p>" +
//   "<p> </p>" +
//   "<p><b>Vielen Dank fürs Teilnehmen!</b></p>" +
//   "<p> </p>" +
//   "<p> </p>" +
//   "<p>Haben Sie während des Abschlusses des Experiments ein Problem festgestellt?</p>" +
//   "<p>Wenn ja, beschreiben Sie es bitte unten.</p>",
//   html: "<p><input name='issues' type='text' /></p>",
//   button_label: "Einreichen",
// };

var debrief = {
  data: {screen_id: "end_exp"},
  type: 'html-button-response',
  stimulus: "<p><b>Das Experiment ist nun beendet!</b></p>" +
  "<p> </p>" +
  "<p><b>Vielen Dank für Ihre Teilnehme!</b></p>",
  choices: ["Fortfahren"],
  on_finish: function() {
    // var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(n_trials/n_trials);
  }
};

var issues_report = {
  data: {
    screen_ID: "issues_report"
  },
  type: 'survey-text',
  questions: [
    {prompt:
      "<p>HHaben Sie während des Experiments ein Problem festgestellt?</p>" +
      "<p>Falls ja, beschreiben Sie es bitte unten.</p>", rows: 30, columns: 50},
    //    "<p>Haben Sie während des Abschlusses des Experiments ein Problem festgestellt?</p>" +
    // "<p>Wenn ja, beschreiben Sie es bitte unten.</p>", rows: 30, columns: 50},
  ]
};

debrief_timeline.timeline.push(debrief);
debrief_timeline.timeline.push(issues_report);
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
//////////////////////// START EXPERIMENT //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function startExp() {
  console.log("startExp reached")
  /* start the experiment */

  var audioFiles = [
    "../../stimuli/calibration/partyCrowd11sec_eq.wav",               // 1. CALIBRATION
    "../../stimuli/calibration/silence1sec.wav",
    "../../stimuli/TT/met1HzSoft_2min.wav",                           // 2. TONGUE TWISTER
    "../../stimuli/TT/met2_5HzSoft_2min.wav",
    "../../stimuli/TT/egTTslow.wav",
    "../../stimuli/TT/egTTfast.wav",
    // stimDir_SiN + "AAA_practiceTrial_Speaker25_Digit6_0dB_SNR.wav",   // 3. SRT
    // stimDir_SiN + "Speaker01_Digit5_0dB_SNR.wav",
    // stimDir_SiN + "Speaker05_Digit8_0dB_SNR.wav",
    // stimDir_SiN + "Speaker06_Digit6_0dB_SNR.wav",
    // stimDir_SiN + "Speaker07_Digit3_0dB_SNR.wav",
    // stimDir_SiN + "Speaker08_Digit2_0dB_SNR.wav",
    // stimDir_NVS + "AAA_practiceTrial_Speaker25_Digit8_120envDep_pt.wav",
    // stimDir_NVS + "Speaker16_Digit4_120envDep_pt.wav",
    // stimDir_NVS + "Speaker21_Digit9_120envDep_pt.wav",
    // stimDir_NVS + "Speaker25_Digit3_120envDep_pt.wav",
    // stimDir_NVS + "Speaker33_Digit0_120envDep_pt.wav",
    // stimDir_NVS + "Speaker48_Digit5_120envDep_pt.wav",
    stimDir_FWDS + "originalFWDS_list1.wav",                          // 4. DIGITSPAN
    stimDir_FWDS + "originalFWDS_list2.wav",
    stimDir_FWDS + "originalFWDS_list3.wav",
    stimDir_FWDS + "originalFWDS_list4.wav",
    stimDir_FWDS + "originalFWDS_list5.wav",
    stimDir_FWDS + "originalFWDS_list6.wav",
    stimDir_FWDS + "originalFWDS_list7.wav",
    stimDir_FWDS + "originalFWDS_list8.wav",
    stimDir_FWDS + "originalFWDS_list9.wav",
    stimDir_FWDS + "originalFWDS_list10.wav",
    stimDir_BWDS + "originalBWDS_list1.wav",
    stimDir_BWDS + "originalBWDS_list2.wav",
    stimDir_BWDS + "originalBWDS_list3.wav",
    stimDir_BWDS + "originalBWDS_list4.wav",
    stimDir_BWDS + "originalBWDS_list5.wav",
    stimDir_BWDS + "originalBWDS_list6.wav",
    stimDir_BWDS + "originalBWDS_list7.wav",
    stimDir_BWDS + "originalBWDS_list8.wav",
    stimDir_BWDS + "originalBWDS_list9.wav",
    stimDir_BWDS + "originalBWDS_list10.wav",
    stimDir_SiNwords + "Tankstelle.wav",
    stimDir_SiNwords + "Kirche.wav",
    stimDir_SiNwords + "Tempel.wav",
    stimDir_SiNwords + "Zitrone.wav",
    stimDir_SiNwords + "Zebra.wav",
    stimDir_SiNwords + "Erdbeere.wav",
    stimDir_SiNwords + "Krippe.wav",
    stimDir_SiNwords + "Ozean.wav",
    stimDir_SiNwords + "Geige.wav",
    stimDir_SiNwords + "Kabine.wav",
    stimDir_SiNwords + "Pyramide.wav",
    stimDir_SiNwords + "Kartoffel.wav",
    stimDir_SiNwords + "Teppich.wav",
    stimDir_SiNwords + "Panda.wav",
    stimDir_SiNwords + "Salz.wav",
    stimDir_SiNwords + "Tomate.wav",
    stimDir_SiNwords + "Kiefer.wav",
    stimDir_SiNwords + "Sessel.wav",
    stimDir_SiNwords + "Zeitung.wav",
    stimDir_SiNwords + "Pflanze.wav",
    stimDir_SiNwords + "Fisch.wav",
    stimDir_SiNwords + "Handschuh.wav",
    stimDir_SiNwords + "Hotel.wav",
    stimDir_SiNwords + "Dusche.wav",
    stimDir_SiNwords + "Hammer.wav",
    stimDir_SiNwords + "Stuhl.wav",
    stimDir_SiNwords + "Suppe.wav",
    stimDir_SiNwords + "Treppe.wav",
    stimDir_SiNwords + "Taube.wav",
    stimDir_SiNwords + "Apotheke.wav",
    stimDir_SiNwords + "Radio.wav",
    stimDir_SiNwords + "Flughafen.wav",
    stimDir_SiNwords + "Trommel.wav",
    stimDir_SiNwords + "Kasino.wav",
    stimDir_SiNwords + "Frosch.wav",
    stimDir_SiNwords + "Blume.wav",
    stimDir_SiNwords + "Lunge.wav",
    stimDir_SiNwords + "Cello.wav",
    stimDir_SiNwords + "Bluse.wav",
    stimDir_SiNwords + "Kittel.wav",
    stimDir_SiNwords + "Tasche.wav",
    stimDir_SiNwords + "Flugzeug.wav",
    stimDir_SiNwords + "Brust.wav",
    stimDir_SiNwords + "Luft.wav",
    stimDir_SiNwords + "Schule.wav",
    stimDir_SiNwords + "Schwein.wav",
    stimDir_SiNwords + "Markt.wav",
    stimDir_SiNwords + "Stimme.wav",
    stimDir_SiNwords + "Ring.wav",
    stimDir_SiNwords + "Kaffee.wav",
    stimDir_NVSwords + "Gitarre.wav",
    stimDir_NVSwords + "Taxi.wav",
    stimDir_NVSwords + "Tunnel.wav",
    stimDir_NVSwords + "Handgelenk.wav",
    stimDir_NVSwords + "Zwiebel.wav",
    stimDir_NVSwords + "Sandale.wav",
    stimDir_NVSwords + "Nudel.wav",
    stimDir_NVSwords + "Krawatte.wav",
    stimDir_NVSwords + "Lippe.wav",
    stimDir_NVSwords + "Elefant.wav",
    stimDir_NVSwords + "Sonnenbrille.wav",
    stimDir_NVSwords + "Gewebe.wav",
    stimDir_NVSwords + "Klavier.wav",
    stimDir_NVSwords + "Ohrring.wav",
    stimDir_NVSwords + "Schmuck.wav",
    stimDir_NVSwords + "Rasierer.wav",
    stimDir_NVSwords + "Gabel.wav",
    stimDir_NVSwords + "Birne.wav",
    stimDir_NVSwords + "Knochen.wav",
    stimDir_NVSwords + "Stiefel.wav",
    stimDir_NVSwords + "Stein.wav",
    stimDir_NVSwords + "Beutel.wav",
    stimDir_NVSwords + "Geschenk.wav",
    stimDir_NVSwords + "Papier.wav",
    stimDir_NVSwords + "Tiger.wav",
    stimDir_NVSwords + "Brot.wav",
    stimDir_NVSwords + "Spiegel.wav",
    stimDir_NVSwords + "Sofa.wav",
    stimDir_NVSwords + "Brille.wav",
    stimDir_NVSwords + "Kabinett.wav",
    stimDir_NVSwords + "Schulter.wav",
    stimDir_NVSwords + "Fernsehen.wav",
    stimDir_NVSwords + "Mixer.wav",
    stimDir_NVSwords + "Tablette.wav",
    stimDir_NVSwords + "Hirsch.wav",
    stimDir_NVSwords + "Lampe.wav",
    stimDir_NVSwords + "Seife.wav",
    stimDir_NVSwords + "Panther.wav",
    stimDir_NVSwords + "Esel.wav",
    stimDir_NVSwords + "Bleistift.wav",
    stimDir_NVSwords + "Finger.wav",
    stimDir_NVSwords + "Gehirn.wav",
    stimDir_NVSwords + "Schwanz.wav",
    stimDir_NVSwords + "Schiff.wav",
    stimDir_NVSwords + "Himmel.wav",
    stimDir_NVSwords + "Hemd.wav",
    stimDir_NVSwords + "Rohr.wav",
    stimDir_NVSwords + "Nase.wav",
    stimDir_NVSwords + "Boot.wav",
    stimDir_NVSwords + "Katze.wav"
];

  var imgDir = "../../stimuli/imgs/";

  var images = [
    imgDir + "fireFox3.jpg",
    imgDir + "chrome2.jpg",
    imgDir + "neuroling_logo_grayscale.jpg",
    imgDir + "UZH_logo.jpg"
  ];

  jsPsych.init({
   preload_audio: audioFiles,
   preload_images: images,
   show_progress_bar: true,
   auto_update_progress_bar: false,
   // timeline: [introduction_timeline, calib_timeline, questionnaire_timeline,
   //   TT_pre_timeline, TT_timeline_Demo, FWDS_timeline, BWDS_timeline,
   //    instructions_wordRec, wordRec_Demo_timeline, debrief_timeline],
    timeline: [Prolific_ID_timeline, TT_timeline_Demo],
    use_webaudio: true,
    on_interaction_data_update: function(data) {
      var cTrial = jsPsych.currentTrial();
      // cTrial.data.event = data.event;
      cTrial.event = data.event;
    },
    on_finish: function() {
      $.ajax({
        type: "POST",
        url: "/experiment-data",
        data: JSON.stringify(jsPsych.data.get().values()),
        contentType: "application/json"
      })

      .done(function(){
        // jsPsych.data.displayData();
        window.location.href = "finish";
        // alert("Sie haben das Experiment abgeschlossen und die Daten wurden gespeichert!");
      })

      .fail(function(){
        alert("Beim Schreiben von Daten in Dropbox ist ein Problem aufgetreten. " +
              "Die Daten werden auf Ihrem Computer gespeichert. " +
              "Bitte kontaktieren Sie den Experimentator am 'ACexperiment2020@gmail.com'");
        var csv = jsPsych.data.get().csv();
        var filename = "ACexp_part" + jsPsych.data.get().values()[0].part_ID + "_" + DATE + ".csv";
        // var filename = "ACexp_part" + jsPsych.data.get().values()[0].Part_ID + "_" + " + DATE + " + ".csv";
        downloadCSV(csv,filename);
        // window.location.href = "finish";
      })
    }
  });
};
