export default {
  state: {
    announcements: [],
    promotions: [],
    recommend: []
  },
  getters: {
    announcements: state => state.announcements,
    promotions: state => state.promotions,
    recommended: state => state.promotions,
    totalPromotions: state => state.promotions.length,
    totalRecommended: state => state.recommended.length,
  }
}
