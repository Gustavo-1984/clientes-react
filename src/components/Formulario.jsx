import React from 'react'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'



const Title = styled.h1`
    color: white;
`;

const SubTitle = styled.h1`
    font-weight: bold;
`
const Error = styled.span`
    color: tomato;
    font-size: 12px;
`


const Formulario = () => {

    const {register, formState: {errors}, handleSubmit} = useForm()

    const onSubmit = (data, e) =>{
        console.log(data);
        e.target.reset()
    }

    return (
      <>
        <div className="columns">
          <div className="column">
            <Title className="level-item has-text-centered title color-white">
              Clientes
            </Title>
          </div>
        </div>

        {/* ----------------------Formulario---------------- */}

        <div className="box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="column">
              <SubTitle>Datos Generales: </SubTitle>
              <input
                className="input is-info"
                type="text"
                placeholder="Razón social"
                name='razonSocial'
                {...register('razonSocial', {required: true})}
              />
              {errors.razonSocial && <Error>Campo Obligatorio</Error>}
            </div>
            <div className="column">
              <input
                className="input is-info"
                type="text"
                placeholder="Nombre comercial"
                name='nombreComercial'
                {...register('nombreComercial', {required: true})}
              />
              {errors.nombreComercial && <Error>Campo Obligatorio</Error>}
            </div>

            <div className="column">
              <input
                className="input is-info"
                type="text"
                placeholder="Nacionalidad"
                name='nacionalidad'
                {...register('nacionalidad', {required: true})}
              />
              {errors.nacionalidad && <Error>Campo Obligatorio</Error>}
            </div>
            <div className="column">
              <div className="columns">
                <div className="column">
                  <input
                    className="input is-info"
                    type="text"
                    placeholder="Fecha de constitucion"
                    name='fechaConst'
                    {...register('fechaConst', {required: true, pattern: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/})}
                  />
                   {errors.fechaConst && <Error>Ingrese formato de fecha valido (dd/mm/aa)</Error>}
                </div>

                <div className="column">
                  <input
                    className="input is-info"
                    type="text"
                    placeholder="RFC"
                    name='rfc'
                    {...register('rfc', {required: true, pattern: /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/})}
                  />
                  {errors.rfc && <Error>Ingrese RFC valido(Mayusculas)</Error>}
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns">
                <div className="column">
                  <input
                    className="input is-info"
                    type="text"
                    placeholder="Regimen fiscal"
                    name='regFiscal'
                    {...register('regFiscal', {required: true})}
                  />
                   {errors.regFiscal && <Error>Campo Obligatorio</Error>}
                </div>

                <div className="column is-half">
                  <input
                    className="input is-info"
                    type="text"
                    placeholder="Industria"
                    name='industria'
                    {...register('industria', {required: true})}
                  />
                   {errors.industria && <Error>Campo Obligatorio</Error>}
                </div>
              </div>
            </div>

            {/* -------------Domicilio---------------- */}

            <div className="column">
              <SubTitle>Domicilio: </SubTitle>
              <input
                className="input is-link"
                type="text"
                placeholder="Calle o avenida"
                name='calle'
                {...register('calle', {required: true})}
              />
              {errors.calle && <Error>Campo Obligatorio</Error>}
            </div>
            <div className="column">
              <div className="columns">
                <div className="column">
                  <input
                    className="input is-link"
                    type="text"
                    placeholder="N° Ext"
                    name='nExterior'
                {...register('nExterior', {required: true})}
                  />
                   {errors.nExterior && <Error>Campo Obligatorio</Error>}
                </div>

                <div className="column">
                  <input
                    className="input is-info"
                    type="text"
                    placeholder="N° Int"
                    name='nInterior'
                    {...register('nInterior', {required: true})}
                  />
                  {errors.nInterior && <Error>Campo Obligatorio</Error>}
                </div>

                <div className="column">
                  <input
                    className="input is-link"
                    type="text"
                    placeholder="Código Postal"
                    name='codigoPostal'
                    {...register('codigoPostal', {required: true, pattern: /^d{5}(?:[-s]d{4})?$/})}
                  />
                   {errors.codigoPostal && <Error>Campo Obligatorio</Error>}
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns">
                <div className="column">
                  <input
                    className="input is-link"
                    type="text"
                    placeholder="Colonia o Urbanización"
                    name='colonia'
                    {...register('colonia', {required: true})}
                  />
                  {errors.colonia && <Error>Campo Obligatorio</Error>}
                </div>

                <div className="column is-half">
                  <input
                    className="input is-link"
                    type="text"
                    placeholder="Ciudad o Poblacion"
                    name='ciudad'
                    {...register('ciudad', {required: true})}
                  />
                  {errors.ciudad && <Error>Campo Obligatorio</Error>}
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns">
                <div className="column">
                  <input
                    className="input is-link"
                    type="text"
                    placeholder="Entidad federativa"
                    name='edo'
                    {...register('edo', {required: true})}
                  />
                  {errors.edo && <Error>Campo Obligatorio</Error>}
                </div>

                <div className="column is-half">
                  <input
                    className="input is-link"
                    type="text"
                    placeholder="País"
                    name='pais'
                    {...register('pais', {required: true})}
                  />
                  {errors.pais && <Error>Campo Obligatorio</Error>}
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns">
                  <div className='column'>
              <div className="file is-info">
                <label className="file-label">
                    <input className="file-input" type="file" name="resume"/>
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span className="file-label">
                       Comp/Domicilio
                    </span>
                    </span>
                </label>
                </div>
                </div>

                <div className="column is-half">
                  <input
                    className="input is-link"
                    type="text"
                    placeholder="Numero telefonico"
                    name='tel'
                    {...register('tel', {required: true})}
                  />
                  {errors.tel && <Error>Campo Obligatorio</Error>}
                </div>
              </div>
            </div>

            <div className="column">
              <input
                className="input is-link"
                type="email"
                placeholder="Direccion de correo electronico"
                name='mail'
                {...register('mail', {required: true, pattern: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/})}
              />
               {errors.email && <Error>Ingrese mail valido</Error>}
            </div>

            {/* -----------------------Representante Legal--------------------- */}

            <div className="column">
              <SubTitle>Representante legal: </SubTitle>
              <input
                className="input is-primary"
                type="text"
                placeholder="Nombre"
                name='name'
                {...register('name', {required: true})}
              />
               {errors.name && <Error>Campo Obligatorio</Error>}
            </div>
            <div className="column">
              <div className="columns">
                <div className="column">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Genero"
                    name='genero'
                    {...register('genero', {required: true})}
                  />
                  {errors.genero && <Error>Campo Obligatorio</Error>}
                </div>

                <div className="column">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Fecha de nacimiento"
                    name='fNacimiento'
                    {...register('fNacimiento', {required: true, pattern: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/})}
                  />
                  {errors.fNacimiento && <Error>Ingrese formato de fecha valido (dd/mm/aa)</Error>}
                </div>

                <div className="column">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Edo nacimiento"
                    name='edoNacimiento'
                    {...register('edoNacimiento', {required: true})}
                  />
                  {errors.edoNacimiento && <Error>Campo Obligatorio</Error>}
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns">
                <div className="column">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Pais de nacimiento"
                    name='paisNacimiento'
                    {...register('paisNacimiento', {required: true})}
                  />
                   {errors.paisNacimiento && <Error>Campo Obligatorio</Error>}
                </div>

                <div className="column is-half">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Nacionalidad"
                    name='nacionalidad'
                    {...register('nacionalidad', {required: true})}
                  />
                  {errors.nacionalidad && <Error>Campo Obligatorio</Error>}
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns">
                <div className="column">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="CURP"
                    name='curp'
                    {...register('curp', {required: true, pattern: /^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/})}
                  />
                   {errors.rfc && <Error>Campo Obligatorio</Error>}
                </div>

                <div className="column is-half">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="RFC"
                    name='rfc2'
                    {...register('rfc2', {required: true, pattern: /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/})}
                  />
                   {errors.rfc && <Error>Campo Obligatorio</Error>}
                </div>
              </div>
            </div>

            <div className="column">
              <div className="columns">
                <div className="column">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Domicilio"
                    name='dom'
                    {...register('dom', {required: true})}
                    
                  />
                   {errors.dom && <Error>Campo Obligatorio</Error>}
                </div>

                <div className="column is-half">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Estado civil"
                    name='edoCivil'
                    {...register('edoCivil', {required: true})}
                  />
                  {errors.edoCivil && <Error>Campo Obligatorio</Error>}
                </div>
              </div>
            </div>

            <div className="column">
              <input
                className="input is-primary"
                type="email"
                placeholder="Direccion de correo electronico"
                name='correo'
                {...register('correo', {required: true, pattern: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/})}
              />
               {errors.email && <Error>Ingrese mail valido</Error>}
            </div>

            <div className="column">
              <div className="columns">
                <div className="column">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Teléfono"
                    name='telefono'
                    {...register('telefono', {required: true})}
                
                  />
                  {errors.telefono && <Error>Campo Obligatorio</Error>}
                </div>

                <div className="column">
                <div className="file is-primary">
                <label className="file-label">
                    <input className="file-input" type="file" name="resume" />
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span className="file-label">
                        Doc/Identificacion
                    </span>
                    </span>
                </label>
                </div>
                </div>
              </div>
            </div>

            {/* ----------------Cuenta Bancaria-------------------------- */}

            <div className="column">
              <SubTitle>Cuenta Bancaria</SubTitle>
              <input
                className="input is-info"
                type="text"
                placeholder="CLABE"
                name='clabe'
                {...register('clabe', {required: true})}
              />
              {errors.clabe && <Error>Campo Obligatorio</Error>}
          
            </div>
            <div className="column">
              <input
                className="input is-info"
                type="text"
                placeholder="Banco"
                name='banco'
                    {...register('banco', {required: true})}
              />
              {errors.banco && <Error>Campo Obligatorio</Error>}
            </div>
            <div className="column">
              <input
                className="button is-success is-fullwidth is-rounded"
                type="submit"
                value="Enviar"
              />
            </div>
          </form>
        </div>
      </>
    );
}



export default Formulario
