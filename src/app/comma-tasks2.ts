import {c2} from './competences/competences2';

const bsp2txt = `
Bei Erläuterungen{aufz}, Einschüben{aufz_und} und Zusätzen{no} wird ein Komma gesetzt.
Der Apfel war rot,{aufz} grün{aufz_und} und gelb.
Willst du ein{aufz}, zwei{aufz_oder} oder dreimal spielen?
Ich möchte doch nur springen{aufz}, tanzen{aufz_und} und lachen!
Er hämmerte{aufz}, schraubte{aufz}, bohrte{aufz_last} den ganzen Tag
Er ist viel, viel schneller.
Komm nie, nie wieder!
Ein blauer, gepunkteter Mantel
Zwei graue, raue Eier
Die besten inländischen Vertreter
Die einzigen wahren Helden
Dr. Hans Meier hat keine Zeit
Der Herr Doktor Müller kommt gerne
Das ist Martin{zusatz}, mein Mentor
Roger Federer{zusatz}, Ikone und Familienvater zugleich{zusatz}, spielt gerne Tennis.
Markus Teuber{zusatz}, Liebling des Volkes{zusatz}, ist heute 82 Jahre alt geworden.
Es gibt zehn Gebote{naemlich}, nämlich jene von Moses.
Du musst jetzt folgen{zusatz}, und zwar plötzlich!
Die Schweizer haben gut gespielt{insbesondere}, insbesondere Xhaka.
Mir gefallen die Bilder{insbesondere}, insbesondere das von Pollock.
Das war ziemlich früh am Morgen{naemlich}, nämlich um 6:00 Uhr.
Sie haben heute gespielt{zusatz}, und zwar gut!
Die leuchtenden Punkte{also}, also die Sterne, waren am ganzen Himmel deutlich zu sehen.
Hoch oben im Turm{naemlich}, nämlich im siebten Stock{zusatz_close}, sass Rapunzel.
Ganz müde{also}, also ohne jegliche Lust{zusatz_close}, räumte er die Kartoffeln ins Regal.
Im Tierheim waren viele junge{zusatz}, und zwar niedliche{zusatz_last_word} Hundewelpen.
Im Stadion waren viele{zusatz}, und zwar wütende{zusatz_last_word} Fussballfans.
Die Jungs waren schnell{insbesondere}, insbesondere Karl.
Es ist alles gut{zumindest}, zumindest in der Theorie.
Ich weiss{ns_dass}, dass ich nichts weiss.
Dass ich nichts weiss{ns_dass}, weiss ich doch schon.
Ich habe mir schon gedacht{ns_dass}, dass du wieder kneifst.
Ich kann nicht glauben{ns_dass}, dass du mich betrogen hast!
Sende mir den Brief{ns}, falls du ihn findest.
Gib mir doch bitte das Bier{ns_wenn}, wenn du gerade schon stehst.
Siehst du den Vogel{ns_relativ}, der dort oben gleitet?
Er war so schwer verwundet{ns_dass}, dass er nicht mehr gehen konnte.
Er hat gewonnen{ns_indem}, indem er sie manipuliert hat!
Weil ich dich beobachtet habe{ns_weil}, bist du gegangen.
Er übt jeden Tag die Kommaregeln{ns_damit}, damit er beim Diktat brillieren kann.
Sie spielt oft mit ihrem Neffen{ns_damit}, damit er eine schöne Kindheit hat.
Der Mann meiner Frau{zusatz}, also mein Schwager{zusatz_close}, schaut gerne Fussball.
Der Sohn meiner Schwester{zusatz}, also mein Neffe{zusatz_close}, kann schon bis zehn zählen.
Das Wetter war viel schlechter{ns_als}, als wir gedacht hatten.
Dieser Film ist schlechter{ns_als}, als ich es verkraften kann.
Sie mag mich besser{ns_als}, als es mir lieb ist.
Er tat es{ns_obwohl}, obwohl er es nicht wollte.
Du hast mich geküsst{ns_obwohl}, obwohl ich mich dagegen gewehrt habe!
Er sass den ganzen Tag im Keller{ns_obwohl}, obwohl es schön Wetter war.
Obwohl ich es dir tausend mal erklärt habe{ns_obwohl}, machst du immer noch den gelichen Fehler!
Obwohl mir übel war{ns_obwohl}, trank ich noch ein Bier.
Sie studiert Psychologie{ns_da}, da sie sich für Menschen interessiert.
Da er mich sehr gut kennt{ns_da}, hatte er genau das richtige Geschenk für mich.
Wenn du leben willst{ns_wenn}, steig ein!
Die Situation war sowohl ihm{sowohl_als_auch} als auch seinem Meerschweinchen sehr unangenehm.
Sowohl der Papst{sowohl_als_auch} als auch der Priester waren zufrieden.
Ich weiß weder wie man singt{weder_noch} noch wie man tanzt.
Ich habe weder Lust{weder_noch} noch Laune.
Du kannst weder schreiben{weder_noch} noch lesen.
Du musst entweder gehen{entweder_oder} oder bleiben.
Entweder Tat{entweder_oder} oder Wahrheit
Entweder wir ziehen das jetzt durch{entweder_oder} oder du wirst es für immer bereuen.
Ich habe es geahnt{bzw} beziehungsweise gespürt.
Er hat mich massiert{bzw} beziehungsweise verwöhnt.
Das Auto haben mir meine Eltern geschenkt{rsp} respektive geliehen.
Den Kuchen haben wir gegessen{rsp} respektive verschlungen.
Der Schnitt heilte besser{als_vgl} als erwartet.
Wir haben mehr Kuchen{als_vgl} als nötig.
Die Sieger wurden gefeiert{wie_vgl} wie Götter.
Wie schon beim ersten Treffen{wie_vgl} kam es zu keinem Kuss.
Der Ball flog weiter{als_vgl} als gewollt.
Wir sehen uns am Mittwoch{datum}, dem 13. Juli{datum}, um 20 Uhr.
Er fährt am Montag{datum}, dem 5. April[,] wieder zurück.
Mittwoch{datum}, den 25. Juli[,] um 14 Uhr[,] kommt er zurück.
Er wohnt in Zürich{ort}, Rentenweg 15.
Sie wohnt in Basel{ort}, Tiefweg 12.
Ich kann mir nichts schöneres vorstellen{inf_als}, als mit dir zu sprechen.
Anstatt einen Brief zu schreiben{inf_anstatt}, könntest du auch einfach anrufen.
Ihr könnt nichts machen, außer die Verantwortung abzugeben.
Er tat es{inf_ohne}, ohne gefragt worden zu sein.
Wir wollen handeln{inf_statt}, statt nur zu reden.
Sie ging hinter das Gebüsch{inf_um}, um sich umzuziehen.
Eine spezielle Sorte der Kirschtorte{zusatz}, die Zuger-Kirschtorte{zusatz_close}, wird dann gebacken{ns_wenn}, wenn relativ viele Gäste diese wollen.
Solange nicht genügend Fragen vorhanden sind{ns}, macht es für den Lehrer keinen Sinn{inf_relativ}, den Schülern einen Vortrag zu halten{ns_relativ}, der die ganzen Sachverhalte erklärt.
Der Täter konnte ohne DNA-Proben{no} anhand der Fingerabdrücke{no} überführt werden.
Um die Zusammenarbeit zwischen den Mitgliedern zu verbessern{konj_und} und um interne Abläufe zu organisieren{inf_um}, wurde ein Task-Management-System{zusatz}, wie es auch bei grossen Firmen zum Einsatz kommt{zusatz_close}, benötigt.
Die Aufgabe sollte nicht zu schwierig sein{ns_da}, da es sonst nicht möglich ist{inf}, die Schüler richtig zu fördern.
Der Computer ist dafür konzipiert{inf}, den Menschen eine einfache Möglichkeit zu bieten{inf}, die Texte digital zu erfassen{aufz}, Rechnungen schneller durchzuführen und die Lebensqualität zu erhöhen{ns}, wobei letzeres nicht immer der Realität entspricht.
Sowohl der höhere Verbrauch von Kohlenstoffdioxid{sowohl_als_auch} als auch die stärkere Belastung der Umwelt{no} haben diese Entscheidung beeinflusst.
Das Komma bei "Ein Haus[,] das ..." zu setzen{inf}, ist schwieriger.
Kein Komma bei "er hat" zu setzten{inf}, ist trivial.
Einem sehr schwach eingeschätzten Läufer eine sehr lange Strecke vorzuschlagen{inf}, wird wahrscheinlich nicht in einem Erfolg resultieren.
Passend heisst in diesem Zusammenhang{no} passend zum persönlichen Level{konj_und} und um den persönlichen Fortschritt bestmöglich zu fördern.
Der Tutor lernt aus den Abgaben der Schüler und versucht{inf}, darin Muster zu erkennen.
Solange nicht genügend Fragen vorhanden sind{ns}, macht es für den Lehrer keinen Sinn{inf}, den Schülern einen Vortrag zu halten{ns_relativ}, der die ganzen Sachverhalte erklärt.
Man bekommt oft erschreckende Antworten{ns_wenn}, wenn man gewisse Leute fragt{ns_ob}, ob sie wissen{ns_wo}, wo Europa liegt.
Ein Turm ist grösser als{als_vgl} ein Haus.
Weisst du{ns_wo}, wo Europa liegt?`;


const re = /\{(.*?)\}/g;
let match;
let counter = 0;
let everythingGood = true;
while ((match = re.exec(bsp2txt)) && counter < 1000) {
  if (c2.includes(match[1])) {
    // everything good...
  } else {
    everythingGood = false;
    console.error('mismatch:', match[1]);
  }
  counter++;
}
if (!everythingGood) {
  alert('Not everything good! A competence is missing, see logs.');
} else {
  console.info('everything good', new Date());
}

export const bsp2 = bsp2txt.split('\n').filter(c => c !== '');
