export default function ColorContainer() {
  return (
    <aside>
      <div className="color-container">
        <div className="input-item">
          <label>Reset Color</label>
          <button>Reset</button>
        </div>
        <div className="input-item">
          <label>Main Color</label>
          <input type="text" placeholder="ABC456" />
        </div>
        <div className="input-item">
          <label>Border Color</label>
          <input type="text" />
        </div>
      </div>
    </aside>
  );
}
