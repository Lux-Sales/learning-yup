export const maskDate = (e: any) => {
    let input = e.target;
    if (e.charCode < 47 || e.charCode > 57) {
        e.preventDefault();
    }
    var len = input.value.length;

    if (len !== 1 || len !== 3) {
        if (e.charCode == 47) {
            e.preventDefault();
        }
    }

    if (len === 2) {
        input.value += '/';
    }

    if (len === 5) {
        input.value += '/';
    }
}

export const maskCPF = (e: any) => {
    let input = e.target;
    if (e.charCode < 47 || e.charCode > 57) {
        e.preventDefault();
    }
    var len = input.value.length;

    if (len !== 1 || len !== 3) {
        if (e.charCode == 47) {
            e.preventDefault();
        }
    }

    if (len === 3) {
        input.value += '.';
    }

    if (len === 7) {
        input.value += '.';
    }
    if (len === 11) {
        input.value += '-';
    }
}
