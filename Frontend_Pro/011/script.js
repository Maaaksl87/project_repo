var a = 5; // глобальна область видимості
function one() {
    let b = "Ця зміна оголошена в дочірній функції two";
    console.log(a); //5

    function two() {
        var c = 45;
        console.log(b);

        function three() {
            console.log(c); //45
            const TEXT = "Ця зміна не буде доступна в двох поппередніх функціях, але доступна в цій!";
            console.log(TEXT);
        }
        three();
        console.log(TEXT); //ReferenceError: TEXT is not defined
    }
    two();
}
one();
// ну якось так :)