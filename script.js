const circulo = {
    raio: "",
    calcCircunferencia() {
        const circunferencia = Math.PI * this.raio * 2;
        return circunferencia;
    },
    calcArea(){
        const area = Math.PI * this.raio * this.raio;
        return area;
    },
    calculos(){
        circunferencia = this.calcCircunferencia(this.calcCircunferencia);
        area = this.calcArea(this.calcArea);
        console.log(`para o raio de valor ${this.raio}, esse circulo tem área ${area} e circunferência ${circunferencia}`);
    }
}

circulo.raio = 15;

console.log(circulo.calculos());