export const PeliculaCrear = () => {
	return (
		<>
			<div className="pt-3 d-flex justify-content-center">
				<div className="col-md-11">
					<form className="row g-3 needs-validation">
						<div className="col-md-6 position-relative">
							<label htmlFor="marc" className="form-label">
								Titulo
							</label>
							<input
								type="text"
								className="form-control border border-black"
								id="marc"
								name="marc"
								required
							/>
						</div>
						<div className="col-md-6 position-relative">
							<label htmlFor="colo" className="form-label">
								Año
							</label>
							<input
								type="text"
								className="form-control border border-black"
								id="colo"
								name="colo"
								required
							/>
						</div>

						<div className="col-md-6 position-relative">
							<label htmlFor="prec" className="form-label">
								Director
							</label>
							<input
								type="text"
								className="form-control border border-black"
								id="prec"
								name="prec"
								required
							/>
						</div>


						<div className="col-12">
							<button className="btn btn-primary" type="submit">
								Guardar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
