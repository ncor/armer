export const sounds: HTMLAudioElement[] = [
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
].map(name => new Audio(`sounds/keyboard/${name}.mp3`));

export const getRandomSound = () => sounds[
    Math.floor(Math.random() * sounds.length)
];
