function greet(input: string): string {
    if (input != "") {
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
}

export { greet };