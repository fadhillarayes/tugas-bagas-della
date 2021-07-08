class plant {
    constructor(_nama, Jenis, Tinggi, Tipe) {
        this._nama = _nama;
        this.Jenis = Jenis;
        this.Tinggi = Tinggi;
        this.Tipe = Tipe;
    }

    perkenalan() {
        return console.log(`1. Nama tanaman: ${this._nama}\n2. Jenis tanaman : ${this.Jenis}\n3. Tinggi tanaman : ${this.Tinggi}\n4. Tipe tanaman : ${this.Tipe}`)
    }

    detail() {
        return console.log(`${this._nama} merupakan tanaman ${this.Jenis} dengan tinggi batang mencapai ${this.Tinggi}. ${this._nama} tergolong ke dalam kelompok ${this.Tipe}.`)
    }
}

class Tree extends plant {
    constructor(_nama, Jenis, Tinggi, Tipe, _jenisAkar, fungsi_pohon) {
        super(_nama, Jenis, Tinggi, Tipe);
        this._jenisAkar = _jenisAkar;
        this.fungsi_pohon = fungsi_pohon;
    }

    perkenalan() {
        return `${(super.perkenalan())}\n5. Fungsi dari pohon : ${this.fungsi_pohon}\n`
    }

    tree_detail() {
        return console.log(`${this._nama} merupakan salah satu tumbuhan ${this.Jenis} dengan tinggi ${this.Tinggi}. ${this._nama} tergolong ke tumbuhan ${this.Tipe}, berakar ${this._jenisAkar}, dan biasanya pohon ini digunakan ${this.fungsi_pohon}.`)
    }
}

class Grass extends plant {
    constructor(_nama, Jenis, Tinggi, Tipe, _jenisAkar, fungsi_rumput) {
        super(_nama, Jenis, Tinggi, Tipe);
        this._jenisAkar = _jenisAkar;
        this.fungsi_rumput = fungsi_rumput;
    }

    perkenalan() {
        return `${(super.perkenalan())}\n5. Fungsi dari rumput : ${this.fungsi_rumput}\n`
    }

    grass_detail() {
        return console.log(`${this._nama} merupakan salah satu tumbuhan ${this.Jenis} dengan tinggi ${this.Tinggi}. ${this._nama} tergolong ke tumbuhan ${this.Tipe}, berakar ${this._jenisAkar}, dan biasanya rumput ini digunakan ${this.fungsi_rumput}.`)
    }
}

class Flower extends plant {
    constructor(_nama, Jenis, Tinggi, Tipe, _jenisAkar, fungsi_bunga) {
        super(_nama, Jenis, Tinggi, Tipe);
        this._jenisAkar = _jenisAkar;
        this.fungsi_bunga = fungsi_bunga;
    }

    perkenalan() {
        return `${(super.perkenalan())}\n5. Fungsi dari bunga : ${this.fungsi_bunga}\n`
    }

    flower_detail() {
        return console.log(`${this._nama} merupakan salah satu tumbuhan ${this.Jenis} dengan tinggi ${this.Tinggi}. ${this._nama} tergolong ke tumbuhan ${this.Tipe}, berakar ${this._jenisAkar}, dan biasanya pohon ini digunakan ${this.fungsi_bunga}.`)
    }
}





const Ketapang = new Tree('Ketapang', 'berkayu', '10 m', 'dikotil', 'tunggang', 'Berbuah');
console.log(Ketapang.perkenalan());
console.log(Ketapang.detail());
console.log(Ketapang.tree_detail());
console.log("-------------------------------------------");

const Mawar = new Flower('Mawar', 'batang berduri', '50 cm', 'dikotil', 'tunggang', 'tempat yang tidak terekspos cahaya matahari langsung');
console.log(Mawar.perkenalan());
console.log(Mawar.detail());
console.log(Mawar.flower_detail());
console.log("-------------------------------------------");

const Rumput = new Grass('Rumput', 'herba', '20 cm', 'monokotil', 'serabut', 'tempat yang tidak terawat dan terekspos cahaya matahari langsung');
console.log(Rumput.perkenalan());
console.log(Rumput.detail());
console.log(Rumput.grass_detail());
console.log("-------------------------------------------");