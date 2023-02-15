import React from "react";

function Page4() {
  return (
    <div>
      <div className="container" style={{ marginTop: "70px" }}>
        <form className="row g-3">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <label htmlFor="gcpprojectId" className="form-label">
              Private Service Connect Network Name
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>

          <div className="col-md-4 form-check" style={{ marginTop: "54px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              readOnly
              checked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Use Development Hostname
            </label>
          </div>
          <div className="col-md-2"></div>

          <div className="col-md-2"></div>
          <div className="col-md-4 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              readOnly
              checked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Provide Custom Certificate
            </label>
          </div>

          <div className="col-md-4">
            <label className="form-label">SSL Certificate Location</label>
            <div className="mb-3">
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>
          <div className="col-md-2"></div>

          <div className="col-md-6"></div>

          <div className="col-md-4">
            <label className="form-label">SSL Certificate Key Location</label>
            <div className="mb-3">
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>

          <div className="col-md-8"></div>

          <div className="col-md-4">
            <button type="button" className="btn btn-primary me-4">
              Previous
            </button>
            <button type="button" className="btn btn-secondary">
              Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page4;
