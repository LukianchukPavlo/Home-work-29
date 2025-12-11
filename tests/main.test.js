const { 
    ageClassification,
    weekFn
} = require('../main');

describe('Перевірка віку', () => {
    test(" age -1 should be null", () => {
        expect(ageClassification(-1)).toBe(null);
    });

    test(" age 0 should be 'Дитинство'", () => {
        expect(ageClassification(0)).toBe("Дитинство");
    });

    test(" age 1 should be 'Дитинство'", () => {
        expect(ageClassification(1)).toBe("Дитинство");
    });

    test(" age 24 should be 'Дитинство'", () => {
        expect(ageClassification(24)).toBe("Дитинство");
    });

    test(" age 24.01 should be 'Молодість'", () => {
        expect(ageClassification(24.01)).toBe("Молодість");
    });

    test(" age 44 should be 'Молодість'", () => {
        expect(ageClassification(44)).toBe("Молодість");
    });

    test(" age 44.01 should be 'Зрілість'", () => {
        expect(ageClassification(44.01)).toBe("Зрілість");
    });

    test(" age 65 should be 'Зрілість'", () => {
        expect(ageClassification(65)).toBe("Зрілість");
    });

    test(" age 65.1 should be 'Старість'", () => {
        expect(ageClassification(65.1)).toBe("Старість");
    });

    test(" age 75 should be 'Старість'", () => {
        expect(ageClassification(75)).toBe("Старість");
    });

    test(" age 75.01 should be 'Довголіття'", () => {
        expect(ageClassification(75.01)).toBe("Довголіття");
    });

    test(" age 90 should be 'Довголіття'", () => {
        expect(ageClassification(90)).toBe("Довголіття");
    });

    test(" age 90.01 should be 'Рекорд'", () => {
        expect(ageClassification(90.01)).toBe("Рекорд");
    });

    test(" age 122 should be 'Рекорд'", () => {
        expect(ageClassification(122)).toBe("Рекорд");
    });

    test(" age 122.01 should be 'null'", () => {
        expect(ageClassification(122.01)).toBe(null);
    });
});

describe("Перевірка дня тижня", () => {
    test(" day 1 should be 'Понеділок'", () => {
        expect(weekFn(1)).toBe('Понеділок')
    })

    test(" day 2 should be 'Вівторок'", () => {
        expect(weekFn(2)).toBe('Вівторок')
    })

    test(" day 3 should be 'Середа'", () => {
        expect(weekFn(3)).toBe('Середа')
    })

    test(" day 4 should be 'Четвер'", () => {
        expect(weekFn(4)).toBe('Четвер')
    })

    test(" day 5 should be 'П\'ятниця'", () => {
        expect(weekFn(5)).toBe('П\'ятниця')
    })

    test(" day 6 should be 'Субота'", () => {
        expect(weekFn(6)).toBe('Субота')
    })

    test(" day 7 should be 'Неділя'", () => {
        expect(weekFn(7)).toBe('Неділя')
    })

    test(" day 0 should be null ", () => {
        expect(weekFn(0)).toBe(null)
    })

    test(" day -1 should be null ", () => {
        expect(weekFn(-1)).toBe(null)
    })

    test(" day 8 should be null ", () => {
        expect(weekFn(8)).toBe(null)
    })
})