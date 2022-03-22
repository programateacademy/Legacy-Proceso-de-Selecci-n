import React, { useEffect, useState } from "react";
import Table from "../../components/tablita/Table";
import NewConvocatory from "../../components/newConvocatory/NewConvocatory";
import "../../components/newConvocatory/EditCohort.jsx";
import DisableBtn from "../../components/disableBtn/DisableBtn";
import RequestService from "../../config/index";
import ModalConvocatory from "../../components/modals/ModalConvocatory";
import { Link } from "react-router-dom";
import convocatorycss from "./Convocatory.module.css";
import { PETITIONS } from "../../../requestUrl";

const Convocatory = () => {
  const [convocatories, setConvocatories] = useState([]);

  const getAllConvocatories = async () => {
    const res = await fetch(PETITIONS.getConvocatories);
    const response = await res.json();
  
    return response;
  }

  useEffect(() => {
    getAllConvocatories().then((convocatory) => setConvocatories(convocatory));
  }, []);

  const rows = convocatories.map((conv) => ({
    "Convocatoria": conv.name,
    "Cupos": conv.maxQuotas,
    "Fecha Inicio": conv.initialDate,
    "Fecha Fin": conv.finalDate,
    "Inicio Bootcamp": conv.initialBootcampDate,
    "Fin Bootcamp": conv.finalBootcampDate
  }));

  return (
    <>
      <div className="section__convocatory">
        <div className="section__content mb-5 d-flex justify-content-between">
          <span className="upperCase bold">Convocatorias</span>
          {rows.length > 0 ? (
            <Link to="/nuevacohorte">
              <button type="submit" className="btn btn-success mt-3">
                Crear Convocatoria
              </button>
            </Link>
          ) : null}
          <div className="box__content">
            <span className="text-crumbs bold-500">Programate</span>
            <i className="fas fa-chevron-right subtitle" />
            <span className="text-crumbs">Convocatoria</span>
          </div>
        </div>
        {rows.length > 0 ? (
          <Table
            className="table"
            convocatoryData={convocatories}
            key={rows.Id}
            rows={rows}
          />
        ) : (
          <NewConvocatory />
        )}
      </div>
    </>
  );
};

export default Convocatory;
