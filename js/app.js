
let ingresos = [new Ingreso("salario",20000),new Ingreso("Venta auto", 50000)]; 
let egresos = [new Egreso("renta",4000),new Egreso("Ropa", 800)]; 

const cargarApp = () => {
    //console.log("cargarApp")
    cargarCabecero()
    console.log("totalIngresos", totalIngresos())
    console.log("totalEgresos", totalEgresos())
}

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalEgresos()));
    console.log(formatoMoneda(totalIngresos()));

}

const totalIngresos = () => {
    let totalIngresos = 0
    
    for (const n of ingresos) {
        totalIngresos = totalIngresos + n._valor
    }

    return totalIngresos

}

const totalEgresos = () => {
    let totalEgresos = 0
    
    for (const n of egresos) {
        totalEgresos = totalEgresos + n._valor
    }
    return totalEgresos

}

const formatoMoneda = (value) => {
    return value.toLocaleString('es-MX', { style: 'currency', currency: 'MXP' });
        
}
const formatoPorcentaje = (value) => {
        return value.toLocaleString('es-MX', { style: 'percent' });
}