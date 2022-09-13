export class Favotire {
    public  id: string;
    public img: string;
    public name: string;
    public artist: string;

    constructor({id, img, name, artist}){
        this.id = id;
        this.img = img;
        this.name = name;
        this.artist = artist;
    }
}
