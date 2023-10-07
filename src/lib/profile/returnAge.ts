export const returnAge = () => {
    const birthDate = new Date('2005-9-28');
    const currentDate = new Date();

    const birthYear = birthDate.getFullYear();
    const currentYear = currentDate.getFullYear();

    let age = currentYear - birthYear;

    const birthMonth = birthDate.getMonth();
    const currentMonth = currentDate.getMonth();
    const birthDay = birthDate.getDate();
    const currentDay = currentDate.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    return age;
};
