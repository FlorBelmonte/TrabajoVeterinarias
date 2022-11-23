import Cliente from "./class/cliente";
import { contadorVIP} from './helper';
import { listaClientes } from "./main";
import * as readlineSync from 'readline-sync';
import { clear } from "console";


let cliente1:Cliente = new Cliente ("jose",454555,3,0);

contadorVIP (cliente1);
contadorVIP (cliente1);
contadorVIP (cliente1);
contadorVIP (cliente1);
contadorVIP (cliente1);
contadorVIP (cliente1);
contadorVIP (listaClientes[1]);
