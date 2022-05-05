import Link from "next/link";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import ModalDialog from "./base/ModalDialog";

function ContentTable(props) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  function toggleDeleteModal(isShow) {
    setOpenDeleteModal(isShow);
    if (!isShow) {
      setDeleteId(null);
    }
  }

  function setDeleteIdFn(id) {
    setDeleteId(id);
  }
  function deleteArticle(id) {
      console.log(id)
  }
  const tableHeaders = props.rows.map((row, index) => {
    if (row == "Title") {
      return <div key={row} className="w-70 pb-5">Title</div>;
    } else {
      return <div key={row} className="w-10 pb-5">{row}</div>;
    }
  });
  const drawRaws = props.data.map((column, index) => {
    const cells = [];
    for (let idx = 0; idx < props.tableKeys.length; idx++) {
      const rowKey = props.tableKeys[idx];
      if (rowKey == "node_title") {
        cells.push(
          <div className="w-70" key={Math.random()}>
            <Link href={`/content/edit/${column._id}`}>
              <a className="d-block main-color">{column[rowKey]}</a>
            </Link>
          </div>
        );
      } else if (rowKey == "updated_date") {
        cells.push(
          <div className="w-10" key={Math.random()}>
            {new Date(column[rowKey]).toISOString().slice(0, 10)}
          </div>
        );
      } else if (rowKey == "actions") {
        cells.push(
          <div className="w-10 d-flex" key={Math.random()}>
            <Link href={`/content/edit/${column._id}`}>
              <Fab
                className="mr-10"
                size="small"
                color="secondary"
                aria-label="edit"
              >
                <EditIcon size="small" />
              </Fab>
            </Link>
            <Fab
              size="small"
              onClick={() => {
                toggleDeleteModal(true);
                setDeleteIdFn(column._id);
              }}
              color="error"
              aria-label="delete"
            >
              <DeleteIcon />
            </Fab>
          </div>
        );
      } else {
        cells.push(
          <div className="w-10" key={Math.random()}>
            {column[rowKey]}
          </div>
        );
      }
    }

    return (
      <div key={index} className="table-row relative pb-10 pt-10 d-flex bb">
        {cells}
      </div>
    );
  });

  return (
    <div>
      <div className="content-table font-13">
        <div className="table-head d-flex bb">{tableHeaders}</div>
        <div className="table-body">{drawRaws}</div>
      </div>
      <ModalDialog
        title="Are you sure?"
        description="do yo really want to delete this item?"
        open={openDeleteModal}
        closeModalHandler={toggleDeleteModal}
        agreeHandler={deleteArticle}
        id={deleteId}
      />
    </div>
  );
}

export default ContentTable;
