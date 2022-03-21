import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { PETITIONS } from "../../../requestUrl";
import {
	dataTypePopulation,
} from "../../helpers/ConvocatoryHelper";

import { useHistory } from "react-router-dom";


const FormConvocatory = (props) => {
  let history = useHistory()

  const { departments, data, query, stractus} = props
	return (
		<>
			<div style={{ width: "50%", margin: " 0 auto" }}>
				<h2>{query ? `Actualiza convocatoria` : 'Nueva Convocatoria'}</h2>
				<Formik
					initialValues={{
						nameConvocatory: data?.name || '',
						maxQuotas: data?.maxQuotas || 0,
						startDate: data?.initialDate || "",
						endDate: data?.finalDate || "",
						startDateBootcamp: data?.initialBootcampDate || "",
						endDateBootcamp: data?.finalBootcampDate || "",
						residenceCountry: data?.residenceCountry || ["Colombia"],
						residenceDepartment: data?.residencyDepartment || [],
						letter: data?.parameterization.motivationLetter || 50,
						sololearn: data?.parameterization.sololearn || 25,
						personalProfile: data?.parameterization.personalProfile || 25,
						age: data?.maxAge || [],
						gender: data?.gender || [],
						typePopulation: data?.typePopulation || [],
						stratus: data?.maxSocioeconomicStratus || [],
					}}
					validate={(allValues) => {
						let errors = {};

						if (!allValues.nameConvocatory) {
							errors.nameConvocatory = "Ingresa un nombre";
						}
						if (!allValues.maxQuotas || allValues.maxQuotas <= 0) {
							errors.maxQuotas = "El campo no puede estar vacio o ser cero";
						}
						if (!allValues.startDate) {
							errors.startDate = "Por favor ingrese una fecha";
						}
						if (!allValues.endDate) {
							errors.endDate = "Por favor ingrese una fecha";
						}
						if (!allValues.startDateBootcamp) {
							errors.startDateBootcamp = "Por favor ingrese una fecha";
						}
						if (!allValues.endDateBootcamp) {
							errors.endDateBootcamp = "Por favor ingrese una fecha";
						}
						if (!allValues.letter || allValues.letter <= 0) {
							errors.letter = "El campo no puede estar vacio o ser cero";
						}
						if (!allValues.sololearn || allValues.sololearn <= 0) {
							errors.sololearn = "El campo no puede estar vacio o ser cero";
						}
						if (!allValues.personalProfile || allValues.personalProfile <= 0) {
							errors.personalProfile = "El campo no puede estar vacio o ser cero";
						}
						if (!allValues.personalProfile || allValues.personalProfile <= 0) {
							errors.personalProfile = "El campo no puede estar vacio o ser cero";
						}
						if (!allValues.residenceCountry || allValues.residenceCountry.length <= 0) {
							errors.residenceCountry = "Debe seleccionar al menos una opción";
						}
						if (!allValues.residenceDepartment || allValues.residenceDepartment.length <= 0) {
							errors.residenceDepartment = "Debe seleccionar al menos una opción";
						}
						if (!allValues.residenceDepartment || allValues.residenceDepartment.length <= 0) {
							errors.residenceDepartment = "Debe seleccionar al menos una opción";
						}
						if (!allValues.age || allValues.age.length <= 0) {
							errors.age = "Debe seleccionar al menos una opción";
						}
						if (!allValues.gender || allValues.gender.length <= 0) {
							errors.gender = "Debe seleccionar al menos una opción";
						}
						if (!allValues.typePopulation || allValues.typePopulation.length <= 0) {
							errors.typePopulation = "Debe seleccionar al menos una opción";
						}
						if (!allValues.stratus || allValues.stratus.length <= 0) {
							errors.stratus = "Debe seleccionar al menos una opción";
						}
						return errors;
					}}
					onSubmit={(allValues, { resetForm }) => {
						console.log(allValues);
						const newConvocatory = {
							name: allValues.nameConvocatory,
							maxQuotas: allValues.maxQuotas,
							initialDate: allValues.startDate,
							finalDate: allValues.endDate,
							initialBootcampDate: allValues.startDateBootcamp,
							finalBootcampDate: allValues.endDateBootcamp,
							parameterization: {
								personalProfile: allValues.personalProfile,
								sololearn: allValues.sololearn,
								motivationLetter: allValues.letter,
							},
							residenceCountry: allValues.residenceCountry,
							residencyDepartment: allValues.residenceDepartment,
							maxAge: allValues.age,
							maxSocioeconomicStratus: allValues.stratus,
							gender: allValues.gender,
							typePopulation: allValues.typePopulation,
						};

						try {
							if(query){
								axios.put(`${PETITIONS.updateConcovatory}${data._id}`, newConvocatory)
									.then(() => {
										history.push("/convocatoria")
									});
							}else{
								axios.post(PETITIONS.createConvocatory, newConvocatory)
									.then((res) => {
										const msg = res.data.msg;
										alert(msg);
										history.push("/convocatoria")
									});
							}
						} catch (error) {
							console.log(`Algo fallo ${error}`);
						}
						resetForm();
					}}>
					{({ errors }) => (
						<Form>
							{/* Convocatory Creation */}
							<div>
								<div>
									<label htmlFor='nameConvocatory'>Nombre Convocatoria</label>
									<Field
										type='text'
										name='nameConvocatory'
										id='nameConvocatory'
									/>
									<ErrorMessage
										name='nameConvocatory'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.nameConvocatory}
											</span>
										)}
									/>
								</div>
								<div>
									<label htmlFor='maxQuotas'>Cupos</label>
									<Field type='number' name='maxQuotas' />
									<ErrorMessage
										name='maxQuotas'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.maxQuotas}
											</span>
										)}
									/>
								</div>
								<div>
									<label htmlFor='startDate'>Fecha inicio</label>
									<Field type='date' name='startDate' id='startDate' />
									<ErrorMessage
										name='startDate'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.startDate}
											</span>
										)}
									/>
								</div>
								<div>
									<label htmlFor='endDate'>Fecha cierre</label>
									<Field type='date' name='endDate' id='endDate' />
									<ErrorMessage
										name='endDate'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.endDate}
											</span>
										)}
									/>
								</div>
								<div>
									<label htmlFor='startDateBootcamp'>Inicio del Bootcamp</label>
									<Field
										type='date'
										name='startDateBootcamp'
										id='startDateBootcamp'
									/>
									<ErrorMessage
										name='startDateBootcamp'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.startDateBootcamp}
											</span>
										)}
									/>
								</div>
								<div>
									<label htmlFor='endDateBootcamp'>Cierre del Bootcamp</label>
									<Field
										type='date'
										name='endDateBootcamp'
										id='endDateBootcamp'
									/>
									<ErrorMessage
										name='endDateBootcamp'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.endDateBootcamp}
											</span>
										)}
									/>
								</div>
							</div>

							{/* Category for parametrization */}
							<div>
								<h3>Estos valores son medidos en porcentajes</h3>
								<div>
									<label htmlFor='letter'>Carta</label>
									<Field type='number' name='letter' id='letter' />
									<ErrorMessage
										name='letter'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.letter}
											</span>
										)}
									/>
								</div>
								<div>
									<label htmlFor='sololearn'>SoloLearn</label>
									<Field type='number' name='sololearn' id='sololearn' />
									<ErrorMessage
										name='sololearn'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.sololearn}
											</span>
										)}
									/>
								</div>
								<div>
									<label htmlFor='personalProfile'>Perfil personal</label>
									<Field
										type='number'
										name='personalProfile'
										id='personalProfile'
									/>
									<ErrorMessage
										name='personalProfile'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.personalProfile}
											</span>
										)}
									/>
								</div>
							</div>

							{/* Parametrization of the evaluation profile */}
							<div>
								<h3>
									Parametrizacion de la evaluacion del perfil (Para seleccionar
									varios datos presione la telca Shift o Ctrl)
								</h3>
								<div>
									<h4>Pais de residencia</h4>
									<Field
										name='residenceCountry'
										as='select'
										multiple
										className='form-control select picker'>
										<option value='colombia'>Colombia</option>
										<option value='venezuela'>Venezuela</option>
										<option value='no-aplica'>No aplica</option>
									</Field>
									<ErrorMessage
										name='residenceCountry'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.residenceCountry}
											</span>
										)}
									/>
								</div>
								<div>
									<h4>Departamento de residencia</h4>
									<Field
										name='residenceDepartment'
										as='select'
										multiple
										className='form-control select picker'
										style={{ height: "300px" }}>
										{departments?.map((department, index) => (
											<option value={department.departamento} key={index}>
												{department.departamento}
											</option>
										))}
										<option value='caracas'>Caracas</option>
										<option value='otro'>Otro</option>
									</Field>
									<ErrorMessage
										name='residenceDepartment'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.residenceDepartment}
											</span>
										)}
									/>
								</div>
								<div>
									<h4>Edad</h4>
									<Field
										name='age'
										as='select'
										multiple
										className='form-control select picker'>
										<option value='18+'>Mayores a 18</option>
										<option value='18-'>Menores a 18</option>
									</Field>
									<ErrorMessage
										name='age'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.age}
											</span>
										)}
									/>
								</div>
								<div>
									<h4>Genero segun documento de identidad</h4>
									<Field
										name='gender'
										as='select'
										multiple
										className='form-control select picker'>
										<option value='masculino'>Masculino</option>
										<option value='femenino'>Femenino</option>
									</Field>
									<ErrorMessage
										name='gender'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.gender}
											</span>
										)}
									/>
								</div>
								<div>
									<h4>Tipo de población</h4>
									<Field
										name='typePopulation'
										as='select'
										multiple
										className='form-control select picker'>
										{dataTypePopulation?.map((data, index) => (
											<option value={data} key={index}>
												{data}
											</option>
										))}
									</Field>
									<ErrorMessage
										name='typePopulation'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.typePopulation}
											</span>
										)}
									/>
								</div>
								<div>
									<h4>Estrato</h4>
									<Field
										name='stratus'
										as='select'
										multiple
										className='form-control select picker'>
										{stractus?.map((strac, index) => (
											<option value={strac} key={index}>
												{strac}
											</option>
										))}
									</Field>
									<ErrorMessage
										name='stratus'
										component={() => (
											<span style={{ color: "red" }}>
												{errors.stratus}
											</span>
										)}
									/>
								</div>
							</div>
							<input type='submit' value='Guardar' />
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

export default FormConvocatory;
