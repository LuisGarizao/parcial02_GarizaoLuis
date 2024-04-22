export const PeliculaAdmin = () => {
    return (
        <>
			<div className="pt-3 pb-4 d-flex justify-content-center">
				<div className="col-md-10">
					<table className="table table-bordered border border-black">
						<thead>
							<tr>
								<th style={{width:"10%"}} className="text-center">Codigo</th>
								<th style={{width:"45%"}} className="text-center">Titulo</th>
								<th style={{width:"10%"}} className="text-center">Año</th>
								<th style={{width:"25%"}} className="text-center">Director</th>
								<th style={{width:"10%"}} className="text-center">&nbsp;</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-center">
								<td>1</td>
								<td>Superman Legacy</td>
								<td>2025</td>
								<td>James Gunn</td>
                                <td>
                                    <i className="fa-solid fa-pen-to-square" style={{color:"green"}}></i>
                                    &nbsp;
                                    <i className="fa-solid fa-trash" style={{color:"red"}}></i>
                                </td>
							</tr>
							<tr className="text-center">
								<td>2</td>
								<td>The Batman</td>
								<td>2022</td>
								<td>Matt Reeves</td>
                                <td>
                                    <i className="fa-solid fa-pen-to-square" style={{color:"green"}}></i>
                                    &nbsp;
                                    <i className="fa-solid fa-trash" style={{color:"red"}}></i>
                                </td>
							</tr>
							<tr className="text-center">
								<td>3</td>
								<td>Django: Unchained</td>
								<td>2012</td>
								<td>Quentin Tarantino</td>
                                <td>
                                    <i className="fa-solid fa-pen-to-square" style={{color:"green"}}></i>
                                    &nbsp;
                                    <i className="fa-solid fa-trash" style={{color:"red"}}></i>
                                </td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
        </>
    );
};
