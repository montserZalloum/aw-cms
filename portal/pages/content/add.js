import Card from "../../components/base/Card";

import { useState } from "react";
import { server } from "../../config";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import DomainsBox from "../../components/content/DomainsBox";
import AuthorBox from "../../components/content/AuthorBox";
import FixedMenu from "../../components/content/FixedMenu";
import TitleTabs from "../../components/content/TitleTabs";
import ImagesModal from "../../components/content/ImagesModal";
import VideoModal from "../../components/content/VideoModal";
import TagsModal from "../../components/content/TagsModal";
import DepartmentsModal from "../../components/content/DepartmentsModal";
import PublishModal from "../../components/content/PublishModal";

function add() {
  const dispatch = useDispatch();
  const router = useRouter();

  // **********
  // MODALS
  // **********
  const [showImageModalState, setShowImageModalState] = useState(false);
  const [showVideoModalState, setShowVideoModalState] = useState(false);
  const [showTagsModalState, setShowTagsModalState] = useState(false);
  const [showDepartmentsModalState, setShowDepartmentsModalState] =
    useState(false);
  const [showPublishModalState, setShowPublishModalState] =
    useState(false);

  // loading & alert functions
  const isLoading = (isLoad) => dispatch({ type: "LOADING", payload: isLoad });
  const alert = (message, status) =>
    dispatch({ type: "ALERT", payload: { message, status } });

  return (
    <Card>
      <FixedMenu
        setVideoModal={setShowVideoModalState}
        setImageModal={setShowImageModalState}
        setTagsModal={setShowTagsModalState}
        setDepartmentsModal={setShowDepartmentsModalState}
        setPublishModal={setShowPublishModalState}
      />
      <div className="d-flex align-center space-between mb-30">
        <DomainsBox />
        <div className="">
          <AuthorBox />
        </div>
      </div>
      <TitleTabs />
      <ImagesModal
        show={showImageModalState}
        setShow={setShowImageModalState}
      />
      <VideoModal show={showVideoModalState} setShow={setShowVideoModalState} />
      <TagsModal show={showTagsModalState} setShow={setShowTagsModalState} />
      <DepartmentsModal
        show={showDepartmentsModalState}
        setShow={setShowDepartmentsModalState}
      />
      <PublishModal
        show={showPublishModalState}
        setShow={setShowPublishModalState}
      />
    </Card>
  );
}

export default add;
