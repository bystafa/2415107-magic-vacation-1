import variables from '../../scss/general/variables.scss';

export default () => {
    window.addEventListener('load', () => {
        const changeScreenDelay = parseFloat(variables['change-screen-delay']) || 0;
        const introTitleDelay = changeScreenDelay;
        const introDateDelay = introTitleDelay + 133;
        const sliderTitleDelay = changeScreenDelay;
        const prizesTitleDelay = changeScreenDelay;
        const rulesTitleDelay = 0;
        const gameTitleDelay = 0;

        document.body.classList.add('page-loaded');

        setCssPropertiesForSpecificChars(document.querySelector('.intro__title'), {
            'Таинственный': {
                0: {
                    'letter-spacing': '-0.088em',
                    'transition-delay': introTitleDelay + 166 + 'ms',
                },
                1: {
                    'transition-delay': introTitleDelay + 100 + 'ms',
                },
                2: {
                    'transition-delay': introTitleDelay + 0 + 'ms',
                },
                3: {
                    'transition-delay': introTitleDelay + 100 + 'ms',
                },
                4: {
                    'letter-spacing': '-0.088em',
                    'transition-delay': introTitleDelay + 133 + 'ms',
                },
                5: {
                    'transition-delay': introTitleDelay + 100 + 'ms',
                },
                6: {
                    'transition-delay': introTitleDelay + 0 + 'ms',
                },
                7: {
                    'transition-delay': introTitleDelay + 233 + 'ms',
                },
                8: {
                    'transition-delay': introTitleDelay + 133 + 'ms',
                },
                9: {
                    'transition-delay': introTitleDelay + 0 + 'ms',
                },
                10: {
                    'transition-delay': introTitleDelay + 133 + 'ms',
                },
                11: {
                    'transition-delay': introTitleDelay + 0 + 'ms',
                },
            },
            'отпуск': {
                0: {
                    'letter-spacing': '-0.088em',
                    'transition-delay': introTitleDelay + 400 + 'ms',
                },
                1: {
                    'transition-delay': introTitleDelay + 433 + 'ms',
                },
                2: {
                    'transition-delay': introTitleDelay + 366 + 'ms',
                },
                3: {
                    'letter-spacing': '-0.088em',
                    'transition-delay': introTitleDelay + 266 + 'ms',
                },
                4: {
                    'transition-delay': introTitleDelay + 400 + 'ms',
                },
                5: {
                    'transition-delay': introTitleDelay + 300 + 'ms',
                },
            },
        });

        setCssPropertiesForSpecificChars(document.querySelector('.intro__date'), {
            '01 — 31.05 / 2020': {
                0: {
                    'transition-delay': introDateDelay + 933 + 'ms',
                },
                1: {
                    'transition-delay': introDateDelay + 900 + 'ms',
                },
                2: {
                    'transition-delay': introDateDelay + 900 + 'ms',
                },
                3: {
                    'transition-delay': introDateDelay + 900 + 'ms',
                },
                4: {
                    'transition-delay': introDateDelay + 900 + 'ms',
                },
                5: {
                    'transition-delay': introDateDelay + 966 + 'ms',
                },
                6: {
                    'transition-delay': introDateDelay + 866 + 'ms',
                },
                7: {
                    'transition-delay': introDateDelay + 900 + 'ms',
                },
                8: {
                    'transition-delay': introDateDelay + 900 + 'ms',
                },
                9: {
                    'transition-delay': introDateDelay + 1000 + 'ms',
                },
                10: {
                    'transition-delay': introDateDelay + 900 + 'ms',
                },
                11: {
                    'transition-delay': introDateDelay + 900 + 'ms',
                },
                12: {
                    'transition-delay': introDateDelay + 900 + 'ms',
                },
                13: {
                    'transition-delay': introDateDelay + 833 + 'ms',
                },
                14: {
                    'transition-delay': introDateDelay + 966 + 'ms',
                },
                15: {
                    'transition-delay': introDateDelay + 933 + 'ms',
                },
                16: {
                    'transition-delay': introDateDelay + 866 + 'ms',
                },
            },
        });

        setCssPropertiesForSpecificChars(document.querySelector('.slider__item-title'), {
            'История': {
                0: {
                    'transition-delay': sliderTitleDelay + 133 + 'ms',
                },
                1: {
                    'letter-spacing': '-0.088em',
                    'transition-delay': sliderTitleDelay + 66 + 'ms',
                },
                2: {
                    'letter-spacing': '-0.088em',
                    'transition-delay': sliderTitleDelay + 0 + 'ms',
                },
                3: {
                    'transition-delay': sliderTitleDelay + 66 + 'ms',
                },
                4: {
                    'transition-delay': sliderTitleDelay + 100 + 'ms',
                },
                5: {
                    'transition-delay': sliderTitleDelay + 66 + 'ms',
                },
                6: {
                    'transition-delay': sliderTitleDelay + 0 + 'ms',
                },
            },
        });

        setCssPropertiesForSpecificChars(document.querySelector('.prizes__title'), {
            'Призы': {
                0: {
                    'transition-delay': prizesTitleDelay + 133 + 'ms',
                },
                1: {
                    'transition-delay': prizesTitleDelay + 66 + 'ms',
                },
                2: {
                    'transition-delay': prizesTitleDelay + 0 + 'ms',
                },
                3: {
                    'transition-delay': prizesTitleDelay + 66 + 'ms',
                },
                4: {
                    'transition-delay': prizesTitleDelay + 100 + 'ms',
                },
            },
        });

        setCssPropertiesForSpecificChars(document.querySelector('.rules__title'), {
            'Правила': {
                0: {
                    'transition-delay': rulesTitleDelay + 166 + 'ms',
                },
                1: {
                    'letter-spacing': '-0.088em',
                    'transition-delay': rulesTitleDelay + 66 + 'ms',
                },
                2: {
                    'transition-delay': rulesTitleDelay + 33 + 'ms',
                },
                3: {
                    'transition-delay': rulesTitleDelay + 0 + 'ms',
                },
                4: {
                    'transition-delay': rulesTitleDelay + 100 + 'ms',
                },
                5: {
                    'transition-delay': rulesTitleDelay + 66 + 'ms',
                },
                6: {
                    'transition-delay': rulesTitleDelay + 0 + 'ms',
                },
            },
        });

        setCssPropertiesForSpecificChars(document.querySelector('.game__title'), {
            'Игра': {
                0: {
                    'transition-delay': gameTitleDelay + 200 + 'ms',
                },
                1: {
                    'transition-delay': gameTitleDelay + 100 + 'ms',
                },
                2: {
                    'letter-spacing': '-0.088em',
                    'transition-delay': gameTitleDelay + 0 + 'ms',
                },
                3: {
                    'letter-spacing': 'normal',
                    'transition-delay': gameTitleDelay + 66 + 'ms',
                },
            },
        });
    });

    function setCssPropertiesForSpecificChars(node, properties) {
        const templateElement = document.createElement('template');
        let text = node.textContent;

        for (const substring in properties) {
            const index = text.indexOf(substring);
            const propertiesBySubstring = properties[substring];

            if (~index) {
                templateElement.content.appendChild(document.createTextNode(text.slice(0, index)));
                text = text.slice(index + substring.length);

                const lineElement = Object.assign(document.createElement('span'), {
                    className: 'line',
                });

                for (const [letterIndex, letter] of [...substring].entries()) {
                    const charElement = Object.assign(document.createElement('span'), {
                        innerHTML: letter.trim() ? letter : '&nbsp;',
                        className: 'char',
                    });

                    if (propertiesBySubstring[letterIndex]) {
                        for (const [propertyName, value] of Object.entries(propertiesBySubstring[letterIndex])) {
                            charElement.style.setProperty(propertyName, value);
                        }
                    }

                    lineElement.appendChild(charElement);
                }

                templateElement.content.appendChild(lineElement);
            }
        }

        templateElement.content.appendChild(document.createTextNode(text));

        node.replaceChildren(templateElement.content);
    }
}
