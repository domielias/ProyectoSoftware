class ProgramaInternacional < ApplicationRecord
    belongs_to :pai
    belongs_to :universidad
    has_many :student
end
