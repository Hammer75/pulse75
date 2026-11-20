(function () {
    function dataDniTemu(dniTemu) {
        const d = new Date();
        d.setDate(d.getDate() - dniTemu);
        const rok = d.getFullYear();
        const miesiac = String(d.getMonth() + 1).padStart(2, '0');
        const dzien = String(d.getDate()).padStart(2, '0');
        return `${rok}-${miesiac}-${dzien}`;
    }

    function wpisSilowy(dniTemu, partia, cwiczenie, seria, ciezar, powt, rir) {
        const onerm = Math.round(ciezar * (1 + powt / 30) * 10) / 10;
        return {
            id: `demo-${dniTemu}-${partia}-${cwiczenie.slice(0, 8)}-${seria}`,
            user_id: 'demo-user',
            data: dataDniTemu(dniTemu),
            partia,
            cwiczenie,
            typ: 'Trening',
            seria,
            ciezar,
            powt,
            onerm,
            rir
        };
    }

    function wpisCardio(dniTemu, cwiczenie, dystansKm, czasMin) {
        return {
            id: `demo-cardio-${dniTemu}-${cwiczenie.slice(0, 8)}`,
            user_id: 'demo-user',
            data: dataDniTemu(dniTemu),
            partia: 'Cardio',
            cwiczenie,
            typ: 'Trening',
            seria: 1,
            ciezar: dystansKm,
            powt: czasMin,
            onerm: 0,
            rir: null
        };
    }

    function wpisRegeneracja(dniTemu, cwiczenie) {
        return {
            id: `demo-regen-${dniTemu}-${cwiczenie.slice(0, 8)}`,
            user_id: 'demo-user',
            data: dataDniTemu(dniTemu),
            partia: 'Regeneracja',
            cwiczenie,
            typ: 'Trening',
            seria: 1,
            ciezar: 0,
            powt: 0,
            onerm: 0,
            rir: null
        };
    }

    window.PULSE75_DEMO_DATA = {
        opis: 'Zestaw danych demonstracyjnych PULSE 75 – pełny podgląd historii, progresu 1RM, RIR, cardio i celów.',
        historia: [
            // Dzisiaj (dniTemu = 0) – pełny przykładowy dzień treningowy (Klatka + Cardio)
            wpisSilowy(0, 'Klatka', 'Wyciskanie sztangi na ławce poziomej', 1, 80, 10, '3'),
            wpisSilowy(0, 'Klatka', 'Wyciskanie sztangi na ławce poziomej', 2, 90, 8, '2'),
            wpisSilowy(0, 'Klatka', 'Wyciskanie sztangi na ławce poziomej', 3, 97.5, 6, '1'),
            wpisSilowy(0, 'Klatka', 'Wyciskanie hantli na ławce skośnej dodatniej', 1, 32, 10, '2'),
            wpisSilowy(0, 'Klatka', 'Wyciskanie hantli na ławce skośnej dodatniej', 2, 34, 8, '1'),
            wpisCardio(0, 'Bieżnia / Bieganie', 5.2, 28),

            // 2 dni temu – Plecy
            wpisSilowy(2, 'Plecy', 'Martwy ciąg klasyczny', 1, 110, 6, '3'),
            wpisSilowy(2, 'Plecy', 'Martwy ciąg klasyczny', 2, 125, 5, '2'),
            wpisSilowy(2, 'Plecy', 'Martwy ciąg klasyczny', 3, 135, 4, '1'),
            wpisSilowy(2, 'Plecy', 'Wiosłowanie sztangą w opadzie tułowia', 1, 75, 10, '2'),
            wpisSilowy(2, 'Plecy', 'Wiosłowanie sztangą w opadzie tułowia', 2, 80, 8, '2'),

            // 4 dni temu – Regeneracja
            wpisRegeneracja(4, 'Stretching'),
            wpisRegeneracja(4, 'Rolowanie (foam roller)'),

            // 6 dni temu – Nogi i Barki
            wpisSilowy(6, 'Nogi', 'Przysiady ze sztangą na plecach (Back Squat)', 1, 100, 8, '3'),
            wpisSilowy(6, 'Nogi', 'Przysiady ze sztangą na plecach (Back Squat)', 2, 112.5, 6, '2'),
            wpisSilowy(6, 'Nogi', 'Przysiady ze sztangą na plecach (Back Squat)', 3, 120, 5, '1'),
            wpisSilowy(6, 'Nogi', 'Wypychanie ciężaru na suwnicy (Leg Press)', 1, 220, 10, '2'),
            wpisSilowy(6, 'Nogi', 'Wypychanie ciężaru na suwnicy (Leg Press)', 2, 250, 8, '1'),
            wpisSilowy(6, 'Barki', 'Wyciskanie żołnierskie (Overhead Press)', 1, 50, 8, '2'),
            wpisSilowy(6, 'Barki', 'Wyciskanie żołnierskie (Overhead Press)', 2, 55, 6, '1'),

            // 9 dni temu – Klatka (wcześniejsza sesja – wyraźny progres do dzisiaj)
            wpisSilowy(9, 'Klatka', 'Wyciskanie sztangi na ławce poziomej', 1, 75, 10, '3'),
            wpisSilowy(9, 'Klatka', 'Wyciskanie sztangi na ławce poziomej', 2, 85, 8, '2'),
            wpisSilowy(9, 'Klatka', 'Wyciskanie sztangi na ławce poziomej', 3, 92.5, 6, '1'),
            wpisSilowy(9, 'Klatka', 'Wyciskanie hantli na ławce skośnej dodatniej', 1, 30, 10, '2'),
            wpisSilowy(9, 'Klatka', 'Wyciskanie hantli na ławce skośnej dodatniej', 2, 32, 8, '2'),

            // 12 dni temu – Plecy + Cardio
            wpisSilowy(12, 'Plecy', 'Martwy ciąg klasyczny', 1, 105, 6, '3'),
            wpisSilowy(12, 'Plecy', 'Martwy ciąg klasyczny', 2, 117.5, 5, '2'),
            wpisSilowy(12, 'Plecy', 'Martwy ciąg klasyczny', 3, 127.5, 4, '1'),
            wpisSilowy(12, 'Plecy', 'Wiosłowanie sztangą w opadzie tułowia', 1, 70, 10, '3'),
            wpisSilowy(12, 'Plecy', 'Wiosłowanie sztangą w opadzie tułowia', 2, 75, 8, '2'),
            wpisCardio(12, 'Rower stacjonny', 12.0, 32),

            // 16 dni temu – Nogi i Barki
            wpisSilowy(16, 'Nogi', 'Przysiady ze sztangą na plecach (Back Squat)', 1, 95, 8, '3'),
            wpisSilowy(16, 'Nogi', 'Przysiady ze sztangą na plecach (Back Squat)', 2, 105, 6, '2'),
            wpisSilowy(16, 'Nogi', 'Przysiady ze sztangą na plecach (Back Squat)', 3, 115, 5, '1'),
            wpisSilowy(16, 'Nogi', 'Wypychanie ciężaru na suwnicy (Leg Press)', 1, 200, 10, '2'),
            wpisSilowy(16, 'Nogi', 'Wypychanie ciężaru na suwnicy (Leg Press)', 2, 230, 8, '2'),
            wpisSilowy(16, 'Barki', 'Wyciskanie żołnierskie (Overhead Press)', 1, 47.5, 8, '3'),
            wpisSilowy(16, 'Barki', 'Wyciskanie żołnierskie (Overhead Press)', 2, 52.5, 6, '2'),

            // 20 dni temu – Klatka (start cyklu w demo)
            wpisSilowy(20, 'Klatka', 'Wyciskanie sztangi na ławce poziomej', 1, 70, 10, '3'),
            wpisSilowy(20, 'Klatka', 'Wyciskanie sztangi na ławce poziomej', 2, 80, 8, '2'),
            wpisSilowy(20, 'Klatka', 'Wyciskanie sztangi na ławce poziomej', 3, 87.5, 6, '2'),
            wpisSilowy(20, 'Klatka', 'Wyciskanie hantli na ławce skośnej dodatniej', 1, 28, 10, '3'),
            wpisSilowy(20, 'Klatka', 'Wyciskanie hantli na ławce skośnej dodatniej', 2, 30, 8, '2'),

            // 23 dni temu – Plecy
            wpisSilowy(23, 'Plecy', 'Martwy ciąg klasyczny', 1, 100, 6, '3'),
            wpisSilowy(23, 'Plecy', 'Martwy ciąg klasyczny', 2, 112.5, 5, '2'),
            wpisSilowy(23, 'Plecy', 'Martwy ciąg klasyczny', 3, 120, 4, '2'),
            wpisSilowy(23, 'Plecy', 'Wiosłowanie sztangą w opadzie tułowia', 1, 65, 10, '3'),
            wpisSilowy(23, 'Plecy', 'Wiosłowanie sztangą w opadzie tułowia', 2, 72.5, 8, '2'),

            // 27 dni temu – Nogi i Barki
            wpisSilowy(27, 'Nogi', 'Przysiady ze sztangą na plecach (Back Squat)', 1, 90, 8, '3'),
            wpisSilowy(27, 'Nogi', 'Przysiady ze sztangą na plecach (Back Squat)', 2, 100, 6, '2'),
            wpisSilowy(27, 'Nogi', 'Przysiady ze sztangą na plecach (Back Squat)', 3, 110, 5, '2'),
            wpisSilowy(27, 'Barki', 'Wyciskanie żołnierskie (Overhead Press)', 1, 45, 8, '3'),
            wpisSilowy(27, 'Barki', 'Wyciskanie żołnierskie (Overhead Press)', 2, 50, 6, '2'),
            wpisRegeneracja(27, 'Odpoczynek całkowity')
        ],
        cele: {
            'Wyciskanie sztangi na ławce poziomej': 130,
            'Martwy ciąg klasyczny': 170,
            'Przysiady ze sztangą na plecach (Back Squat)': 155,
            'Wyciskanie żołnierskie (Overhead Press)': 75,
            'Bieżnia / Bieganie': 10
        },
        bazaCwiczen: {}
    };
})();