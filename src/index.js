import { gt } from './polyglot-runtime';
import moduleFunc from './module';


function test() {
    console.log(gt`test message`);
}

function test2() {
    let a = 5;
    console.log(gt`test message with formatting ${a}`);
    moduleFunc();
}
