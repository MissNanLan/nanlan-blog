import React from 'react';
import { FolderOpenFilled } from '@ant-design/icons';
import { Tree } from 'antd';
import { Wrapper, Title, Content } from '../style';

const treeData = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
      { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
    ],
  },
];

const onSelect = () => {
  //
};

function Category() {
  return (
    <Wrapper>
      <Title>
        <FolderOpenFilled />
        <span className="text">分类</span>
      </Title>
      <Content>
        <Tree onSelect={onSelect} treeData={treeData} />
      </Content>
    </Wrapper>
  );
}

export default Category;
