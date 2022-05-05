function list() {
  return (
    <div className="custom-table">
      <div className="table-head d-flex bb">
        <div className="w-70 pb-5">Name</div>
        <div className="w-30 pb-5">Actions</div>
      </div>
      <div className="table-body">
        <div className="table-row pb-5 pt-5 d-flex bb">
          <div className="w-70">
            <p>My Name</p>
            <div className="row-childrens pl-20">
              <p>my child</p>
            </div>
          </div>
          <div className="w-30 pb-5 pt-5">

          </div>
        </div>
      </div>
    </div>
  );
}

export default list;
