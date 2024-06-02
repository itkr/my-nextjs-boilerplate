function aWait() {
  return new Promise((callback) => {
    setTimeout(callback, 1000);
  });
}

export default async function WaitComponent() {
  await aWait();
  return <div>Finished waiting</div>;
};
