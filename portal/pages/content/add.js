import Card from "../../components/base/Card";

import React, { useState } from "react";
import { server } from "../../config";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
// header
import DomainsBox from "../../components/content/DomainsBox";
import AuthorBox from "../../components/content/AuthorBox";
// title tabs
import TitleTabs from "../../components/content/TitleTabs";

import FixedMenu from "../../components/content/FixedMenu";
// modals
import ImagesModal from "../../components/content/ImagesModal";
import VideoModal from "../../components/content/VideoModal";
import TagsModal from "../../components/content/TagsModal";
import DepartmentsModal from "../../components/content/DepartmentsModal";
import PublishModal from "../../components/content/PublishModal";

// domains data
import { domains } from "../../config/domains";

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
  const [showPublishModalState, setShowPublishModalState] = useState(false);

  // loading & alert functions
  const isLoading = (isLoad) => dispatch({ type: "LOADING", payload: isLoad });
  const alert = (message, status) =>
    dispatch({ type: "ALERT", payload: { message, status } });

  // **********
  // Domains
  // **********
  const [domainsList, setDomainsList] = useState(
    domains.map((item) => {
      return { ...item, isChecked: false };
    })
  );

  // **********
  // video link
  // **********
  const [videoLink, setVideoLink] = useState("");

  // **********
  // tags
  // **********
  const [tagsList, setTagsList] = useState([]);
  
  // **********
  // publish options
  // **********
  const [isPublish, setIsPublish] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [createdAt, setCreatedAt] = useState('2022-01-01');

  return (
    <Card>
      <div className="d-flex align-center space-between mb-30">
        <DomainsBox data={domainsList} setData={setDomainsList} />
        <div className="">
          <AuthorBox />
        </div>
      </div>
      <TitleTabs />
      {/* <DynamicComponentWithNoSSR /> */}

      {/* modals */}
      <FixedMenu
        setVideoModal={setShowVideoModalState}
        setImageModal={setShowImageModalState}
        setTagsModal={setShowTagsModalState}
        setDepartmentsModal={setShowDepartmentsModalState}
        setPublishModal={setShowPublishModalState}
      />
      <ImagesModal
        show={showImageModalState}
        setShow={setShowImageModalState}
      />
      <VideoModal
        show={showVideoModalState}
        setShow={setShowVideoModalState}
        data={videoLink}
        setData={setVideoLink}
      />
      <TagsModal show={showTagsModalState} setShow={setShowTagsModalState} data={tagsList} setData={setTagsList} />
      <DepartmentsModal
        show={showDepartmentsModalState}
        setShow={setShowDepartmentsModalState}
      />
      <PublishModal
        show={showPublishModalState}
        setShow={setShowPublishModalState}
        data={{isPublish:isPublish,isSticky:isSticky,createdAt:createdAt}}
        setIsPublish={setIsPublish}
        setIsSticky={setIsSticky}
        setCreatedAt={setCreatedAt}
      />
    </Card>
  );
}

export default add;
