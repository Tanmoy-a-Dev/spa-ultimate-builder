export default function TabComponentManager() {
  return (
    <div className="border-2 border-accentColor h-[calc(100vh-36px)]">
      {activeTab === 'style' ? (
        <StyleTabComponent activeElement={activeElement} />
      ) : activeTab === 'elementSettings' ? (
        <ElemSettingsTabComponent activeElement={activeElement} />
      ) : activeTab === 'styleManager' ? (
        <StyleManagerTabComponent activeElement={activeElement} />
      ) : (
        <InteractionsTabComponent activeElement={activeElement} />
      )}
    </div>
  );
}
