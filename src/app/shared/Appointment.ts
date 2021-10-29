export class Cliente {
    $key: string;
    nombre: string;
    correo: string
    celular: number;
    direccion: string;
    observaciones: string;
    fecha_reg: string;
}

export class Tecnico {
    $key: string;
    nombre: string;
    correo: string
    celular: number;
    direccion: string;
    observaciones: string;
    fecha_reg: string;
}

export class Celular {
    $key: string;
    equipo: string;
    modelo: string
    marca: string;
    imei: string;
    falla: string;
    observaciones: string;
    id_cliente: string;
    id_tecnico: string;
    estatus: string;
    reparacion: string;
    notas: string;
    fecha_reg: string;
    fecha_sal: string;
}