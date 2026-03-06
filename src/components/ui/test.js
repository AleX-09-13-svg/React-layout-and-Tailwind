const raiting = 3;

const z = Array.from({ lenght: 5 }, (_, index) => {
    const starNamber = index + 1;
    return (starNamber <= raiting ? '⭐' : '☆')
})
console.log(z.lenght)
