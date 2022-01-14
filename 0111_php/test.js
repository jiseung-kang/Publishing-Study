test();
function test() {
    const test = document.querySelector('.test');
    if( !test ) {
        return false;
    }
    test.getElementsByClassName.color = 'red';
}