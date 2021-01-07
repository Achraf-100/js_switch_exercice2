// let nombre = parseInt(prompt('Donne moi ton nombre'));
//  switch (nombre % 2 === 0) {
//      case true:
//          console.log(`${nombre} est un nombre pair`);
//          break;
//      case false:
//          console.log(`${nombre} est un nombre impair`);
//          break;
//      default:

//          break;
//  }

let nombre = prompt('Quel mois souhaites-tu ?');

switch (nombre) {
    case '1':
        console.log('Vous etes en Janvier');
        break;
    case '2':
        console.log('Vous etes en Fevrier');
        break;
    case '3':
        console.log('Vous etes en Mars');
        break;
    case '4':
        console.log('Vous etes en Avril');
        break;
    case '5':
        console.log('Vous etes en Mai');
        break;
    case '6':
        console.log('Vous etes en Juin');
        break;
    case '7':
        console.log('Vous etes en Juillet');
        break;
    case '8':
        console.log('Vous etes en Aout');
        break;
    case '9':
        console.log('Vous etes en Septembre');
        break;
    case '10':
        console.log('Vous etes en Octobre');
        break;
    case '11':
        console.log('Vous etes en Novembre');
        break;
    case '12':
        console.log('Vous etes en Decembre');
        break;

    default:
        console.log('Wtf ?');
        break;
}

