function plant(_nama, Jenis, Tinggi, Tipe) {
    this._nama = _nama;
    this.Jenis = Jenis;
    this.Tinggi = Tinggi;
    this.Tipe = Tipe;
}

plant.prototype.perkenalan = function () {
    return `1. Nama tanaman: ${this._nama}\n2. Jenis tanaman : ${this.Jenis}\n3. Tinggi tanaman : ${this.Tinggi}\n4. Tipe tanaman : ${this.Tipe}.\n`
}

plant.prototype.detail = function () {
    return `${this._nama} merupakan tanaman ${this.Jenis} dengan tinggi batang mencapai ${this.Tinggi}. ${this._nama} tergolong ke dalam kelompok ${this.Tipe}.`
}

function tropical(_nama, Jenis, Tinggi, Tipe, _jenisakar, tempatHidup) {

    plant.call(this,_nama,Jenis,Tinggi,Tipe)
    this._jenisakar = _jenisakar
    this.tempatHidup = tempatHidup
}

tropical.prototype = Object(plant.prototype)

tropical.prototype.tambahan = function () {
    return `${this._nama} merupakan salah satu tumbuhan ${this.Jenis} dengan tinggi ${this.Tinggi}. ${this._nama} tergolong ke tumbuhan ${this.Tipe}, berakar ${this._jenisakar}, dan hidup di ${this.tempatHidup}.`
}

console.log(tropical.prototype.constructor)
tropical.prototype.constructor = tropical
console.log(tropical.prototype.constructor)

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
