class plant {
    constructor(_nama, Jenis, Tinggi, Tipe) {
        this._nama = _nama;
        this.Jenis = Jenis;
        this.Tinggi = Tinggi;
        this.Tipe = Tipe;
    }

    perkenalan() {
        return console.log(`1. Nama tanaman: ${this._nama}\n2. Jenis tanaman : ${this.Jenis}\n3. Tinggi tanaman : ${this.Tinggi}\n4. Tipe tanaman : ${this.Tipe}.\n`)
    }

    detail() {
        return console.log(`${this._nama} merupakan tanaman ${this.Jenis} dengan tinggi batang mencapai ${this.Tinggi}. ${this._nama} tergolong ke dalam kelompok ${this.Tipe}.`)
    }
}

class tropical extends plant {
    constructor(_nama, Jenis, Tinggi, Tipe, _jenisAkar, tempatHidup) {
        super(_nama, Jenis, Tinggi, Tipe);
        this._jenisAkar = _jenisAkar;
        this.tempatHidup = tempatHidup;
    }
    tambahan() {
        return console.log(`${this._nama} merupakan salah satu tumbuhan ${this.Jenis} dengan tinggi ${this.Tinggi}. ${this._nama} tergolong ke tumbuhan ${this.Tipe}, berakar ${this._jenisAkar}, dan hidup di ${this.tempatHidup}.`)
    }
}
const Tree = new tropical('Ketapang', 'berkayu', '10 m', 'dikotil', 'tunggang', 'hutan tropis');
console.log(Tree.perkenalan());
console.log(Tree.detail());
console.log(Tree.tambahan());
console.log("-------------------------------------------");

const Flower = new tropical('Mawar', 'batang berduri', '50 cm', 'dikotil', 'tunggang', 'tempat yang tidak terekspos cahaya matahari langsung');
console.log(Flower.perkenalan());
console.log(Flower.detail());
console.log(Flower.tambahan());
console.log("-------------------------------------------");

const Grass = new tropical('Rumput', 'herba', '20 cm', 'monokotil', 'serabut', 'tempat yang tidak terawat dan terekspos cahaya matahari langsung');
console.log(Grass.perkenalan());
console.log(Grass.detail());
console.log(Grass.tambahan());
console.log("-------------------------------------------");