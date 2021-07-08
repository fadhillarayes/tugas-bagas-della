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

function Tree(_nama, Jenis, Tinggi, Tipe, _jenisakar, fungsi_pohon) {

    plant.call(this, _nama, Jenis, Tinggi, Tipe)
    this._jenisakar = _jenisakar
    this.fungsi_pohon = fungsi_pohon
}

Tree.prototype.constructor = Tree
console.log(Tree.prototype.constructor)
Tree.prototype = Object.create(plant.prototype)

Tree.prototype.tambahan = function () {
    return `${this._nama} merupakan salah satu tumbuhan ${this.Jenis} dengan tinggi ${this.Tinggi}. ${this._nama} tergolong ke tumbuhan ${this.Tipe}, berakar ${this._jenisakar}, dan biasaya berfungsi sebagai ${this.fungsi_pohon}.`
}


function Grass(_nama, Jenis, Tinggi, Tipe, _jenisakar, fungsi_rumput) {

    plant.call(this, _nama, Jenis, Tinggi, Tipe)
    this._jenisakar = _jenisakar
    this.fungsi_rumput = fungsi_rumput
}

Grass.prototype.constructor = Grass
console.log(Grass.prototype.constructor);
Grass.prototype = Object.create(plant.prototype)

Grass.prototype.tambahan = function () {
    return `${this._nama} merupakan salah satu tumbuhan ${this.Jenis} dengan tinggi ${this.Tinggi}. ${this._nama} tergolong ke tumbuhan ${this.Tipe}, berakar ${this._jenisakar}, dan biasaya berfungsi sebagai ${this.fungsi_rumput}.`
}


function Flower(_nama, Jenis, Tinggi, Tipe, _jenisakar, fungsi_bunga) {

    plant.call(this, _nama, Jenis, Tinggi, Tipe)
    this._jenisakar = _jenisakar
    this.fungsi_bunga = fungsi_bunga
}

Flower.prototype.constructor = Flower
console.log(Flower.prototype.constructor);
Flower.prototype = Object.create(plant.prototype)

Flower.prototype.tambahan = function () {
    return `${this._nama} merupakan salah satu tumbuhan ${this.Jenis} dengan tinggi ${this.Tinggi}. ${this._nama} tergolong ke tumbuhan ${this.Tipe}, berakar ${this._jenisakar}, dan biasaya berfungsi sebagai ${this.fungsi_bunga}.`
}













const Ketapang = new Tree('Ketapang', 'berkayu', '10 m', 'dikotil', 'tunggang', 'hutan tropis');
console.log(Ketapang.perkenalan());
console.log(Ketapang.detail());
console.log(Ketapang.tambahan());
console.log("-------------------------------------------");

const Mawar = new Flower('Mawar', 'batang berduri', '50 cm', 'dikotil', 'tunggang', 'tempat yang tidak terekspos cahaya matahari langsung');
console.log(Mawar.perkenalan());
console.log(Mawar.detail());
console.log(Mawar.tambahan());
console.log("-------------------------------------------");

const Rumput = new Grass('Rumput', 'herba', '20 cm', 'monokotil', 'serabut', 'tempat yang tidak terawat dan terekspos cahaya matahari langsung');
console.log(Rumput.perkenalan());
console.log(Rumput.detail());
console.log(Rumput.tambahan());
console.log("-------------------------------------------");
