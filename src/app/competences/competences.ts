import {c2, d2} from './competences2';

export interface Competence {
  description: string;
  1?: Competence;
  2?: Competence;
  3?: Competence;
  4?: Competence;
  5?: Competence;
}


export const competences: {[id: string]: Competence} = {}
c2.forEach((comp, idx) => {
  competences[comp] = {
    description: d2[idx]
  };
});

export const competencesx: { [id: string]: Competence } = {
  d100: {
    description: `Das Komma steht bei Aufzählungen, zwischen gleichrangigen Wörtern und Wortgruppen, wenn sie nicht durch Wörter wie und oder oder (vgl. D 111, 113) verbunden sind <§ 71 (2) und 72>.`
  },
  d100_1: {
    description: `Am Schluss der Aufzählung steht kein Komma, wenn der Satz weitergeht.`
  },
  d101: {
    description: `Zwischen zwei Adjektiven steht nur dann ein Komma, wenn sie einander nebengeordnet sind, das heißt den gleichen Rang haben.
Gelegentlich hängt es vom Sinn des Satzes ab, ob Nebenordnung (Gleichrangigkeit) vorliegt oder nicht <§ 71 E1>.
Es gibt aber auch Fälle, in denen zwischen den zwei Konstruktionsweisen nur ein geringer Unterschied besteht.`
  },
  d102_1: {
    description: `Mehrere vorangestellte Namen und Titel werden nicht durch Komma getrennt.`,
  },
  d102_2: {
    description: `Angaben mit geb., verh., verw. usw. können ohne Komma stehen oder als Zusätze angesehen und mit Kommas abgetrennt werden <§ 77 E2>.`
  },
  d103: {
    description: `Das Komma trennt nachgestellte Zusätze (Appositionen) ab. Wenn der Satz danach weitergeht, steht auch am Ende des Zusatzes ein Komma (= paariges Komma) <§ 77 (2)>.`
  },
  d104: {
    description: `Wenn der Zusatz Teil des Namens ist, steht kein Komma <§ 77 E2>. Man spricht hier auch von Beinamen.`
  },
  d105_1: {
    description: `Das Komma trennt nachgestellte Erläuterungen ab. (Solche Erläuterungen werden häufig durch und zwar, nämlich, z. B., insbesondere oder ähnliche Wörter und Fügungen eingeleitet.)`
  },
  d105_2: {
    description: `Wenn der Satz nach der Erläuterung weitergeht, steht auch am Ende der Erläuterung ein Komma (= paariges Komma) <§ 77 (4)>.`
  },
  d105_3: {
    description: `Steht die Erläuterung jedoch zwischen Adjektiv und Substantiv oder zwischen Verb und Hilfsverb, entfällt das schließende Komma <§ 77 (4)>. (Vgl. auch D 101.)`
  },
  d106_1: {
    description: `Das Komma trennt Adjektive und Partizipien ab, die einem Substantiv oder einem Pronomen nachgestellt sind.
Wenn der Satz danach weitergeht, steht auch am Ende der entsprechenden Wortgruppe ein Komma (= paariges Komma) <§ 77 (7)>. (Vgl. auch D 114.)`
  },
  d106_2: {
    description: `Das Komma steht aber nicht, wenn in bestimmten festen Fügungen (oder in poetischen Texten) ein allein stehendes Adjektiv nachgestellt ist <§ 77 E3>.`
  },
  d107: {
    description: `Oft können die Schreibenden selbst entscheiden, ob sie Wörter oder Satzteile als Zusatz kennzeichnen wollen oder nicht <§ 78>.`
  },
  d107_1: {
    description: `bei Wortgruppen mit wie (vgl. auch D 112) <§ 78 (2)>;`
  },
  d107_2: {
    description: `bei Wortgruppen, die von einer Präposition (einem Verhältniswort) eingeleitet sind <§ 78 (1)>;`
  },
  d107_3: {
    description: `bei Namen, die auf eine Funktionsbezeichnung o. Ä. folgen (vgl. auch D 103) <§ 78 (4)>.`
  },
  d108: {
    description: `Mehrteilige Datums- und Zeitangaben gliedert man durch Kommas. Man kann diese Angaben als Reihungen (Aufzählungen) oder als Fügungen mit Zusatz auffassen; deshalb ist das letzte (schließende) Komma vor der Weiterführung des Satzes freigestellt <§ 77 (3)>. (Vgl. auch D 32.)`
  },
  d109: {
    description: `Mehrteilige Wohnungsangaben gliedert man durch Kommas. Man kann diese Angaben als Reihungen (Aufzählungen) oder als Fügungen mit Zusatz auffassen; deshalb ist das letzte (schließende) Komma vor der Weiterführung des Satzes freigestellt <§ 77 (3)>.`
  },
  d110_1: {
    description: `Mehrteilige Literaturangaben gliedert man durch Kommas. Man kann diese Angaben als Reihungen (Aufzählungen) oder als Fügungen mit Zusatz auffassen; deshalb ist das letzte (schließende) Komma vor der Weiterführung des Satzes freigestellt.`
  },
  d110_2: {
    description: `Bei Hinweisen auf Gesetze, Verordnungen usw. setzt man jedoch kein Komma <§ 77 (3)>.`
  },
  d111: {
    description: `Werden gleichrangige Wörter und Wortgruppen durch eine der folgenden Konjunktionen (Bindewörter) verbunden, so setzt man kein Komma <§ 72 (2)>:`
  },
  d111_1: {
    description: `und`
  }, d111_2: {
    description: `wie (in der Bedeutung »und«)`
  }, d111_3: {
    description: `sowie`
  }, d111_4: {
    description: `sowohl – als [auch]`
  }, d111_5: {
    description: `sowohl – wie [auch]`
  }, d111_6: {
    description: `weder – noch`
  }, d111_7: {
    description: `nicht – noch`
  }, d111_8: {
    description: `oder`
  }, d111_9: {
    description: `entweder – oder`
  }, d111_10: {
    description: `beziehungsweise (bzw.)`
  }, d111_11: {
    description: `respektive (resp.)`
  }, d111_12: {
    description: `Das schließende Komma eines vorangehenden Zusatzes oder Nebensatzes bleibt jedoch erhalten <§ 72 E1>.`
  },
  d112_1: {
    description: `Für die vergleichenden Konjunktionen als und wie gilt: Wenn diese Konjunktionen nur Wörter oder Wortgruppen (ohne Verb) einleiten, setzt man kein Komma <§ 74 E3>.`
  }, d112_2: {
    description: `Für die vergleichenden Konjunktionen als und wie gilt: Wenn diese Konjunktionen einen Nebensatz (mit Verb) einleiten, steht ein Komma.`
  }, d112_3: {
    description: `Für die vergleichenden Konjunktionen als und wie gilt: Bei nachgestellten Zusätzen, die mit wie eingeleitet werden, können Kommas gesetzt werden <§ 78 (2)>. (Vgl. auch D 107.)`
  },
  d113: {
    description: `Bei Konjunktionen, die nicht in den vorgenannten Regeln (D 111 und D 112) aufgeführt sind, gilt die Grundregel der Kommasetzung zwischen gleichrangigen Wörtern und Wortgruppen (vgl. D 100) <§ 71>.`
  },
  d113_1: {
    description: `Dies gilt insbesondere, wenn eine Reihung mit den folgenden entgegensetzenden Konjunktionen vorliegt <§ 72 E2>: aber, doch, jedoch, sondern`
  },
  d113_s: {
    description: `Bei den Konjunktionen aber, doch, jedoch, sondern lässt sich nicht immer zweifelsfrei entscheiden, ob sie eine Reihung oder einen Zusatz einleiten. In diesen Fällen ist das schließende Komma freigestellt.`
  },
  d114: {
    description: `Partizip- und Adjektivgruppen kann man durch Komma abtrennen, um die Gliederung des Satzes deutlich zu machen oder um Missverständnisse auszuschließen. Sind sie eingeschoben, ist gegebenenfalls am Anfang und am Schluss der Wortgruppe ein Komma zu setzen (= paariges Komma oder gar kein Komma).

Das gilt auch für Wortgruppen, die als Verkürzungen von Partizipgruppen aufgefasst werden können <§ 78 (3)>.`
  },
  d115_1: {
    description: `Partizip- und Adjektivgruppen sind durch Komma abzutrennen, wenn sie mit einem hinweisenden Wort oder einer Wortgruppe angekündigt oder wieder aufgenommen werden;`
  },
  d115_2: {
    description: `Partizip- und Adjektivgruppen sind durch Komma abzutrennen, wenn sie einem Substantiv oder Pronomen als Zusatz folgen (vgl. D 106) <§ 77 (7)>;`
  },
  d115_3: {
    description: `Partizip- und Adjektivgruppen sind durch Komma abzutrennen, wenn sie als Nachtrag am Satzende stehen <§ 77 (7)>.`
  },
  d115_4: {
    description: `Das gilt auch für Wortgruppen, die als Verkürzungen von Partizipgruppen aufgefasst werden können <§ 78 (3)>.`
  },
  d116: {
    description: `(Satzwertige) Infinitivgruppen kann man durch Komma abtrennen, um die Gliederung des Satzes deutlich zu machen oder um Missverständnisse auszuschließen <§ 75 E2>.

Sind sie eingeschoben, ist gegebenenfalls am Anfang und am Schluss der Wortgruppe ein Komma zu setzen (= paariges Komma oder gar kein Komma).`
  },
  d117_1: {
    description: `Die Infinitivgruppe wird durch eine der folgenden Konjunktionen eingeleitet: als, anstatt, außer, ohne, statt, um <§ 75 (1)>.`
  },
  d117_2: {
    description: `Die Infinitivgruppe hängt von einem Substantiv ab <§ 75 (2)>.`
  },
  d117_3: {
    description: `Die Infinitivgruppe wird mit einem hinweisenden Wort angekündigt oder wieder aufgenommen <§ 75 (3)>.`
  },
  d117_4: {
    description: `Das Komma ist aber bei den Gebrauchsweisen 2 und 3 fakultativ, sofern ein einfacher Infinitiv mit zu (ohne weitere Wörter oder Satzteile) vorliegt und keine Missverständnisse entstehen können <§ 75 E1>.`
  },
  d117_s1: {
    description: `Der Infinitiv hängt von einem der folgenden Verben ab: sein, haben, brauchen, pflegen, scheinen; im übertragenen Sinn auch: drohen, versprechen.`
  }, d117_s2: {
    description: `Die Infinitivgruppe ist mit dem übergeordneten Satz verschränkt.`
  }, d117_s3: {
    description: `Die Infinitivgruppe schließt den übergeordneten Satz ein.`
  }, d117_s4: {
    description: `Der Infinitiv steht zusammen mit dem übergeordneten Verb in der rechten Satzklammer.`
  }, d118: {
    description: `Das Komma steht zwischen gleichrangigen selbstständigen Teilsätzen <§ 71 (1), 72>. (Vgl. aber zu selbstständigen Teilsätzen, die mit Konjunktionen wie und oder oder verbunden sind, D 119.)`
  }, d118_s: {
    description: `Teilsätze dieser Art können auch durch Satzschlusszeichen voneinander getrennt werden.`
  }, d119_1: {
    description: `Werden gleichrangige selbstständige Teilsätze durch Konjunktionen wie und oder oder verbunden, so setzt man in der Regel kein Komma <§ 72 (1)>.`
  }, d119_2: {
    description: `Ein Komma kann jedoch auch in diesen Fällen gesetzt werden, um die Gliederung des Ganzsatzes deutlich zu machen (besonders, um Missverständnisse zu vermeiden) <§ 73>.`
  }, d119_3: {
    description: `Das schließende Komma eines vorangehenden Einschubs oder Nebensatzes bleibt erhalten <§ 72 E1>. (Vgl. auch D 121 sowie die Vorbemerkungen zu den Kommaregeln.)`
  }, d120: {
    description: `Eingeschobene selbstständige Teilsätze werden von Kommas eingeschlossen <§ 77 (1)>.`
  }, d120_s: {
    description: `Meist könnten an den entsprechenden Stellen auch Gedankenstriche oder Klammern stehen.`
  }, d121: {
    description: `Nebensätze werden vom übergeordneten Satz mit Komma abgetrennt. Wenn der Nebensatz in den übergeordneten Satz eingeschoben ist, steht am Anfang und am Schluss des Nebensatzes ein Komma (= paariges Komma) <§ 74>.`
  }, d122_1: {
    description: `Zwischen gleichrangigen (nebengeordneten) Nebensätzen steht ein Komma <§ 71 (1)>.`
  }, d122_2: {
    description: `Man setzt aber kein Komma, wenn sie durch eine Konjunktion wie und oder oder verbunden sind (vgl. D 111) <§ 72 (1)>.`
  }, d123_1: {
    description: `Nebensätze können mit gewöhnlichen Satzteilen Reihungen bilden. Bei Reihungen mit Konjunktionen wie und oder oder (vgl. D 111) gilt: Zwischen dem Nebensatz und den übrigen Bestandteilen der Reihung entfällt das Komma <§ 74 E2>.`
  }, d123_2: {
    description: `Nebensätze können mit gewöhnlichen Satzteilen Reihungen bilden. Bei Reihungen mit Konjunktionen wie und oder oder (vgl. D 111) gilt: Andere Nebensatzkommas können nicht entfallen.`
  }, d124: {
    description: `Das Komma trennt Nebensätze verschiedenen Grades <§ 74>.`
  },
  d125: {
    description: `Bei formelhaft gebrauchten [verkürzten] Nebensätzen kann das Komma weggelassen werden <§ 76>.`
  },
  d125_s: {
    description: `Sonst gelten für verkürzte Teilsätze dieselben Richtlinien wie bei vollständigen Sätzen.`
  },
  d126: {
    description: `Wird ein Nebensatz von einer mehrteiligen Fügung eingeleitet, so steht zwischen den Teilen der Fügung im Allgemeinen kein Komma <§ 74 E1 (1)>.`
  },
  d127: {
    description: `Bei einigen mehrteiligen Fügungen kann ein Komma zwischen die Teile der Fügung gesetzt werden <§ 74 E1 (2)>.`
  },
  d127_s: {
    description: `Das Komma entspricht hier einer deutlich wahrnehmbaren Pause im gesprochenen Text.`
  },
  d128: {
    description: `Gelegentlich kann der Gebrauch des Kommas verdeutlichen, welche Wörter als Einleitung des Nebensatzes verstanden werden <§ 74 E1 (3)>.`
  },
  d129_1: {
    description: `Wörter oder Wortgruppen, die zur Hervorhebung vorangestellt sind, werden von den nachfolgenden Teilen des Satzes mit Komma abgetrennt. Meist werden solche Wortgruppen mit einem Pronomen oder einem Adverb wieder aufgenommen <§ 77 (5)>.`
  },
  d129_2: {
    description: `Wörter oder Wortgruppen, die einem Pronomen oder Adverb als genauere Erläuterung folgen, werden mit Komma abgetrennt. Wenn der Satz danach weitergeht, steht auch nach der Erläuterung ein Komma (= paariges Komma) <§ 77 (5)>.`
  },
  d130: {
    description: `Das Wort bitte steht als bloße Höflichkeitsformel oft ohne Komma. Bei besonderer Hervorhebung wird es jedoch durch Komma abgetrennt <§ 79 (2), (3)>.`
  },
  d131: {
    description: `Ausrufe, kommentierende Äußerungen, Bekräftigungen werden durch Komma abgetrennt. Das Komma entfällt jedoch, wenn keine Hervorhebung gewollt ist <§ 79 (2), (3)>.`
  },
  d132_1: {
    description: `Das Komma trennt die Anrede vom übrigen Satz <§ 79 (1)>.`
  },
  d132_2: {
    description: `In Briefen folgt nach der Anrede gewöhnlich ein neuer Absatz. Es bestehen dann die folgenden Möglichkeiten <§ 69 E3>:`
  },
  d132_2_1: {
    description: `Gewöhnlich steht nach der Anrede ein Komma. Der folgende Absatz beginnt dann klein.`
  },
  d132_2_2: {
    description: `Gelegentlich steht nach der Anrede ein Ausrufezeichen. Der folgende Absatz beginnt dann groß.`
  },
  d132_2_3: {
    description: `In der Schweiz wird nach der Anrede meist gar kein Satzzeichen gesetzt. Der folgende Absatz beginnt dann groß.`
  },
  d132_s: {
    description: `In modernen und weniger förmlichen Briefanreden besteht die Neigung, das Komma vor dem Namen wegzulassen.`
  }

}
