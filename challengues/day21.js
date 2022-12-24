// Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.

// Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

// printTable([
//   { name: 'Game', quantity: 2 },
//   { name: 'Bike', quantity: 1 },
//   { name: 'Book', quantity: 3 }
// ])

// +++++++++++++++++++
// | Gift | Quantity |
// | ---- | -------- |
// | Game | 2        |
// | Bike | 1        |
// | Book | 3        |
// *******************

// Otro ejemplo donde se puede ver que la tabla siempre usa sólo el espacio justo dependiendo de la longitud de los nombres de los regalos y de las cantidades.

// printTable([
//   { name: 'PlayStation 5', quantity: 9234782374892 },
//   { name: 'Book Learn Web Dev', quantity: 23531 }
// ])

// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************

// Como ves, el tamaño de las celdas depende de la longitud de los nombres de los regalos y de las cantidades, aunque como mínimo tendrán que ser del espacio de los títulos Gift y Quantity respectivamente.

// La tabla usa los símbolos: + para el borde superior, * para el borde inferior, - para las líneas horizontales y | para las líneas verticales.

// Ten en cuenta:

//     Usa sólo el espacio que necesitas para dibujar la tabla.
//     Adapta la tabla a la longitud de los nombres de los regalos y de las cantidades o los títulos de las columnas.
//     No hace falta que ordenes los resultados.
//     La tabla no termina con salto de línea.

// printTable([
//   { name: 'PlayStation 5', quantity: 9234782374892 },
//   { name: 'Book Learn Web Dev', quantity: 23531 }
// ])

// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************

function printTable(gifts) {
  const gift = "Gift";
  const quantity = "Quantity";

  const minGiftCol = gifts.reduce(
    (minimo, val) => (val.name.length > minimo ? val.name.length : minimo),
    4
  );
  const minGiftQuan = gifts.reduce(
    (minimo, val) =>
      val.quantity.toString().length > minimo
        ? val.quantity.toString().length
        : minimo,
    8
  );

  const giftCol = gifts.map(
    (gift) => `| ${gift.name} ${" ".repeat(minGiftCol - gift.name.length)}`
  );
  const quanCol = gifts.map(
    (gift) =>
      `| ${gift.quantity} ${" ".repeat(
        minGiftQuan - gift.quantity.toString().length
      )}|`
  );

  const body = giftCol
    .map((item, i) => `${item.concat(quanCol[i])}\n`)
    .join("");

  const top = `${"+".repeat(minGiftCol + minGiftQuan + 7)}\n`;
  const bottom = `${"*".repeat(minGiftCol + minGiftQuan + 7)}`;
  const title = `| ${gift}${" ".repeat(
    1 + minGiftCol - gift.length
  )}| ${quantity}${" ".repeat(1 + minGiftQuan - quantity.length)}|\n`;
  const divisor = `| ${"-".repeat(minGiftCol)} | ${"-".repeat(
    minGiftQuan
  )} |\n`;

  const header = top + title + divisor;

  return header + body + bottom;
}
