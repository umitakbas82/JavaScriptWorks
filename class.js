class Personel {
    constructor(ad, soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }


    kaydet() {
        console.log("Kaydedildi" + this.ad);
    }
}

const personel = new Personel("Umit","Akbas")

personel.kaydet();
personel.ad ="Umit"
console.log(personel.ad);