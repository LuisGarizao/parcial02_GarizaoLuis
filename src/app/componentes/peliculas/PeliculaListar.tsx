export const PeliculaListar = () => {
	return (
		<>
			<div className="pt-3 d-flex justify-content-center">
				<div className="col-md-10">
					<table className="table table-bordered border border-black">
						<thead>
							<tr>
								<th style={{width:"10%"}} className="text-center">Código</th>
								<th style={{width:"50%"}} className="text-center">Titulo</th>
								<th style={{width:"25%"}} className="text-center">Año</th>
								<th style={{width:"15%"}} className="text-center">Director</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-center">
								<td>1</td>
								<td>Superman Legacy</td>
								<td>2025</td>
								<td>james Gunn</td>
							</tr>
							<tr className="text-center">
								<td>2</td>
								<td>The batman</td>
								<td>2022</td>
								<td>Matt Reeves</td>
							</tr>
							<tr className="text-center">
								<td>3</td>
								<td>Django: unchained</td>
								<td>2012</td>
								<td>Quentin Tarantino</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};
