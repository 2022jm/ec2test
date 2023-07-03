export function formatDateNumber(number: string | number): string {
    return ('0' + number).slice(-2);
}