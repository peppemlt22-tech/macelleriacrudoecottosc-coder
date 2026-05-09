/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'guida-tagli-carne-bovina',
    title: 'Guida ai Tagli di Carne Bovina: Come scegliere il migliore per ogni ricetta',
    excerpt: 'Non tutti i tagli sono uguali. Scopri la differenza tra filetto, controfiletto e scottona per elevare i tuoi piatti.',
    date: '15 Maggio 2025',
    readTime: '5 min',
    category: 'Educational',
    image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=800',
    content: `
# Guida ai Tagli di Carne Bovina: L'Arte della Scelta

Scegliere il taglio giusto è il primo passo per il successo di ogni piatto a base di carne. Spesso ci si limita ai soliti nomi, ma conoscere le caratteristiche tecniche dei vari tagli permette di risparmiare e, soprattutto, di ottenere risultati gourmet anche a casa.

## Il Filetto: Il Re della Tenerezza
Il filetto è il muscolo meno utilizzato dall'animale, il che lo rende incredibilmente tenero. È povero di grassi e ha un sapore delicato. 
**Ideale per:** cotture veloci al sangue, medaglioni al pepe verde o tartare.

## La Scottona: Un'Eccellenza Italiana
Molti pensano che la "Scottona" sia una razza, in realtà si riferisce a una femmina di bovino giovane che non ha mai partorito. La carne è caratterizzata da venature di grasso (marezzatura) che la rendono saporita e tenerissima durante la cottura.

## La Fesa e la Sottofesa
Sono tagli tratti dalla coscia. Sono magri e versatili. 
**Ideale per:** le classiche cotolette, scaloppine o arrosti della domenica.

## Il Consiglio del Nostro Macellaio
Quando venite in macelleria, non chiedete solo "mezzo chilo di carne". Spiegateci cosa volete cucinare: se un brasato, una grigliata veloce o un ragù. Ogni ricetta ha il suo "partner" ideale. La freschezza è garantita, ma la scelta del taglio fa la differenza tra un pasto normale e un'esperienza indimenticabile.
`
  },
  {
    id: 2,
    slug: 'segreti-grigliata-perfetta',
    title: '5 Segreti per una Grigliata (BBQ) Perfetta e Professionale',
    excerpt: 'Dalla temperatura della brace alla scelta degli aromi locali: ecco come stupire i tuoi amici alla prossima grigliata.',
    date: '10 Maggio 2025',
    readTime: '7 min',
    category: 'Guide BBQ',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    content: `
# 5 Segreti per una Grigliata (BBQ) da Professionista

In Sicilia, la grigliata è un rito. Ma come passare da una semplice "arrostita" a un vero BBQ gourmet? Ecco i consigli tecnici della Macelleria Crudo e Cotto.

## 1. La Temperatura è Tutto
Mai mettere la carne sul fuoco appena tolta dal frigorifero. Lo sbalzo termico indurisce le fibre. Lasciatela a temperatura ambiente per almeno 30-60 minuti (coperta e protetta).

## 2. L'Arte della Marezzatura
Per la griglia, scegliete tagli che abbiano un buon grado di marezzatura (il grasso intramuscolare). Il grasso sciogliendosi idrata la carne e sprigiona aromi incredibili 

## 3. La Reazione di Maillard
Asciugate bene la superficie della carne prima di grigliarla. L'umidità è nemica della crosticina dorata (Reazione di Maillard). Solo quando la superficie è asciutta si otterrà quel sapore tipico della carne arrostita.

## 4. Il Riposo Post-Cottura
Questo è l'errore più comune: tagliare la carne subito dopo averla tolta dalla brace. Lasciatela riposare 5 minuti su un tagliere caldo. I succhi si ridistribuiranno nelle fibre, rendendola succosa invece di lasciare tutto il liquido nel piatto.

## 5. Sale e Aromi
Usate sale grosso solo alla fine o sale Maldon. In Macelleria prepariamo dei "rub" (miscele di spezie) con aromi della nostra terra siciliana: rosmarino, origano selvatico e pepe nero. Chiedeteci consiglio per il mix perfetto!
`
  },
  {
    id: 3,
    slug: 'ricetta-involtini-san-cataldesi',
    title: 'Ricetta: Involtini San Cataldesi della Tradizione',
    excerpt: 'La ricetta originale del nostro laboratorio per rifare a casa gli involtini più amati del paese.',
    date: '05 Maggio 2025',
    readTime: '4 min',
    category: 'Ricette',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    content: `
# Ricetta: Gli Involtini della Macelleria Crudo e Cotto

Gli involtini (o "spiedini") sono il cuore dei nostri preparati gourmet. Ogni giorno ne prepariamo centinaia nel nostro laboratorio. Ecco come realizzarli seguendo la nostra filosofia.

## Ingredienti
* Fettine di polpa di bovino (tagliate sottili)
* Pangrattato di qualità
* Pecorino siciliano grattugiato
* Passolina e pinoli (per il tocco agrodolce siciliano)
* Prezzemolo fresco
* Olio extravergine d'oliva locale
* Sale e pepe q.b.

## Preparazione
1. **La Base:** In una ciotola, mescolate il pangrattato con il formaggio, il prezzemolo tritato, una manciata di passolina e pinoli. Aggiungete olio finché il composto non diventa "sabbioso" ma compatto.
2. **La Carne:** Battete leggermente le fettine di carne per renderle uniformi.
3. **Il Ripieno:** Adagiate un cucchiaio di ripieno su ogni fettina. Ripiegate i bordi laterali e arrotolate stretto.
4. **La Cottura:** Infilate gli involtini in uno spiedino, alternandoli magari con una foglia di alloro e un pezzetto di cipolla rossa.
5. **Il Segreto:** Cuoceteli alla griglia o al forno molto caldo per pochi minuti. Devono essere dorati fuori e succosi dentro.

**Volete saltare i passaggi?** Passate in Macelleria: li trovate già pronti, preparati ogni mattina con amore e materie prime freschissime!
`
  }
];
