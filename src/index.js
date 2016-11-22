import moduleFunc from './module';
import { plural } from './plurals';

function test() {
    console.log(gt`test message`);
    plural();
}

function test2() {
    let a = 5;
    console.log(gt`test message with formatting ${a}`);
    moduleFunc();
}

function test3() {
    let a = 5;
    console.log(other`just some other random tag`);
    moduleFunc();
}