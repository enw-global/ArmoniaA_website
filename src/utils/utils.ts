export function getCopyrightYear(): string {
    const currentYear = new Date().getFullYear();
    return currentYear.toString();
}