define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'],
    function (APIConstructor, iatExtension) {

        var API = new APIConstructor();

        return iatExtension({

            // =========================
            // TARGET CATEGORIES
            // =========================

            category1: { // SELF
                name: 'Self', // label in data
                title: {
                    media: { word: 'Self' },          // on-screen label
                    css: { color: '#31940F', 'font-size': '2em' },
                    height: 4
                },
                stimulusMedia: [
                    { word: 'I' },
                    { word: 'me' },
                    { word: 'my' },
                    { word: 'mine' },
                    { word: 'self' },
                    { word: 'myself' }
                ],
                stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
            },

            category2: { // OTHER
                name: 'Other',
                title: {
                    media: { word: 'Other' },
                    css: { color: '#31940F', 'font-size': '2em' },
                    height: 4
                },
                stimulusMedia: [
                    { word: 'they' },
                    { word: 'them' },
                    { word: 'their' },
                    { word: 'theirs' },
                    { word: 'others' },
                    { word: 'someone else' } // I replaced the duplicate "them"; change if you prefer
                ],
                stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
            },

            // =========================
            // ATTRIBUTE CATEGORIES
            // =========================

            attribute1: { // MORAL
                name: 'Moral',
                title: {
                    media: { word: 'Moral' },
                    css: { color: '#0000FF', 'font-size': '2em' },
                    height: 4
                },
                stimulusMedia: [
                    { word: 'caring' },
                    { word: 'compassionate' },
                    { word: 'fair' },
                    { word: 'friendly' },
                    { word: 'generous' },
                    { word: 'helpful' },
                    { word: 'hardworking' },
                    { word: 'honest' },
                    { word: 'kind' }
                ],
                stimulusCss: { color: '#0000FF', 'font-size': '1.8em' }
            },

            attribute2: { // IMMORAL
                name: 'Immoral',
                title: {
                    media: { word: 'Immoral' },
                    css: { color: '#0000FF', 'font-size': '2em' },
                    height: 4
                },
                stimulusMedia: [
                    { word: 'selfish' },
                    { word: 'cruel' },
                    { word: 'unfair' },
                    { word: 'unfriendly' },
                    { word: 'stingy' },
                    { word: 'unhelpful' },
                    { word: 'lazy' },
                    { word: 'dishonest' },
                    { word: 'mean' }
                ],
                stimulusCss: { color: '#0000FF', 'font-size': '1.8em' }
            },

            // =========================
            // GENERAL SETTINGS
            // =========================

            // Only needed if you add images; safe to leave like this.
            base_url: {
                image: 'https://YOUR-DOMAIN.com/iat-images/'
            }

            // The underlying script (quiat9.js) already:
            // - uses the 7-block IAT design (20/20/20/40/40/20/40 trials)
            // - shows a red X for errors until the correct key is pressed
            // - randomises trial order within blocks
            // - has a short ITI between trials
            //
            // If later you really want to tweak advanced stuff 
            // (e.g. fixed response window, feedback text, full-screen),
            // we can add extra parameters here.
        });
    });
