export const mainSectionRender = () => {
    const root = document.getElementById('root');
    const main = document.createElement('main');
    const section = document.createElement('section');

    main.classList.add('main');
    section.classList.add('container');
    section.id = 'main-container';
    main.append(section);

    root.append(main);
}
