const competences2 = `
no
verb
aufz
aufz_und
aufz_oder
aufz_last
zusatz
naemlich
vor_allem
besonders
also
genau_so
insbesondere
zumindest
zusatz_close
zusatz_last_word
ns_dass
ns
ns_wenn
ns_weil
ns_indem
ns_damit
ns_als
ns_obwohl
ns_da
sowohl
als_vgl
wie_vgl
ns_ob
ns_wo
bzw
rsp
datum
ort
ns_anstatt
inf_als
inf_anstatt
inf_statt
inf_ohne
inf_relativ
inf_um
ns_relativ
konj_und
sowohl_als_auch
weder_noch
entweder_oder
inf
konj_als_auch
`;

export const c2 = competences2.split('\n').filter(c => c !== '');

const descriptions2 = `
Hier gibt es keinen Grund, ein Komma zu setzen. Es gibt nur ein Verb und es liegt auch keine Aufzählung und kein Zusatz vor.
Jedem Verb sein Komma!
Bei Aufzählungen wird ein Komma gesetzt
Bei einer Verbindung durch und wird kein Komma gesetzt
Bei einer Verbindung durch oder wird kein Komma gesetzt
Am Schluss der Aufzählung steht kein Komma.
Zusätze werden in Kommas eingeschlossen
Das Wort 'nämlich' weist oftmals auf einen Zusatz hin, und bei einem Zusatz steht ein Komma.
Das Wort 'vor Allem' weist oftmals auf einen Zusatz hin, und bei einem Zusatz steht ein Komma.
Das Wort 'besonders' weist oftmals auf einen Zusatz hin, und bei einem Zusatz steht ein Komma.
Das Wort 'also' weist oftmals auf einen Zusatz hin, und bei einem Zusatz steht ein Komma.
Das Wort 'genau so' weist oftmals auf einen Zusatz hin, und bei einem Zusatz steht ein Komma.
Das Wort 'insbesondere' weist oftmals auf einen Zusatz hin, und bei einem Zusatz steht ein Komma.
Das Wort 'zumindest' weist oftmals auf einen Zusatz hin, und bei einem Zusatz steht ein Komma.
Wenn der Satz nach einem Zusatz weitergeht, steht auch am Ende ein Komma (=paariges Komma).
Wenn der Satz nach einem Zusatz weitergeht, steht auch am Ende ein Komma (=paariges Komma), ausser es kommt nur noch ein Wort. (Kann man das so vereinfachen?)
"Dass" bringt immer ein Komma mit sich.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Das Wort "Wenn" leitet oftmals einen Nebensatz ein und bringt daher ein Komma mit sich.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Bei einem Vergleich kommt kein Komma, es gibt hier auch nur ein Verb. Es ist jedoch ein häufiger Fehler, einen Vergleich mit "als" mit einem Nebensatz zu verwechseln.
Bei einem Vergleich kommt kein Komma, es gibt hier auch nur ein Verb. Es ist jedoch ein häufiger Fehler, einen Vergleich mit "wie" mit einem Nebensatz zu verwechseln.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Bei der Konjunktion "beziehungsweise" steht kein Komma.
Bei der Konjunktion "respektive" steht kein Komma.
Mehrteilige Datums- und Zeitangaben gliedert man durch Kommas.
Mehrteilige Wohnungsangaben gliedert man durch Kommas.
Nebensätze werden durch Kommas abgetrennt. Nebensätze erkennst du gut dadurch, dass das Verb am Ende steht.
Jedem Verb sein Komma!
Jedem Verb sein Komma!
Jedem Verb sein Komma!
Jedem Verb sein Komma!
Jedem Verb sein Komma!
Jedem Verb sein Komma!
Jedem Verb sein Komma!
Bei Konjunktionen mit "Aufzählungscharakter" setzt man kein Komma. Dazu gehören und, oder, sowie, sowohl/als auch, entweder/oder, einerseits/andererseits, weder/noch.
Bei Konjunktionen mit "Aufzählungscharakter" setzt man kein Komma. Dazu gehören und, oder, sowie, sowohl/als auch, entweder/oder, einerseits/andererseits, weder/noch.
Bei Konjunktionen mit "Aufzählungscharakter" setzt man kein Komma. Dazu gehören und, oder, sowie, sowohl/als auch, entweder/oder, einerseits/andererseits, weder/noch.
Bei Konjunktionen mit "Aufzählungscharakter" setzt man kein Komma. Dazu gehören und, oder, sowie, sowohl/als auch, entweder/oder, einerseits/andererseits, weder/noch.
Jedem Verb sein Komma!
Bei Konjunktionen mit "Aufzählungscharakter" setzt man kein Komma. Dazu gehören und, oder, sowie, sowohl/als auch, entweder/oder, einerseits/andererseits, weder/noch.
`;

export const d2 = descriptions2.split('\n').filter(description => description !== '');

if (d2.length !== c2.length) {
  alert(`d2.length !== c2.length: d2.length, c2.length`);
}
