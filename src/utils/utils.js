export function random(digits = 3) {
    switch (digits) {
        default:
            return Math.floor(Math.random()*(999-100+1)+100);
    }
}